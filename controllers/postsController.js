const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc Get all posts
// @route GET /posts
// @access Private
const getAllPosts = asyncHandler(async (req, res) => {
  // Get all posts from MongoDB
  const posts = await Post.find().lean();

  // If no posts
  if (!posts?.length) {
    return res.status(400).json({ message: "No posts found" });
  }

  // Add username to each post before sending the response
  const postsWithUser = await Promise.all(
    posts.map(async (post) => {
      const user = await User.findById(post.user).lean().exec();
      return { ...post, user: { ...user, password: undefined } };
    })
  );

  res.json(postsWithUser);
});

// @desc Create new post
// @route POST /posts
// @access Private
const createNewPost = asyncHandler(async (req, res) => {
  const data = req.body.json;
  const parsedData = JSON.parse(data);

  const user = parsedData.user;
  const title = parsedData.title;
  const text = parsedData.text;
  const date = parsedData.date;
  const location = parsedData.location;
  const prize = parsedData.prize;

  const result = await cloudinary.uploader.upload(req.file.path);
  const imagesrc = result.secure_url;
  const cloudinaryId = result.public_id;

  // Confirm data
  if (!user || !title || !text || !date || !location || !prize) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title
  const duplicate = await Post.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate post title" });
  }

  // Create and store the new user
  const post = await Post.create({
    user,
    title,
    text,
    date,
    location,
    prize,
    imagesrc,
    cloudinaryId,
  });

  if (post) {
    // Created
    return res.status(201).json({ message: "New post created" });
  } else {
    return res.status(400).json({ message: "Invalid post data received" });
  }
});

// @desc Update a post
// @route PATCH /posts
// @access Private
const updatePost = asyncHandler(async (req, res) => {
  const { id, user, title, text, date, location, prize, completed } = req.body;

  // Confirm data
  if (
    !id ||
    !user ||
    !title ||
    !text ||
    !date ||
    !location ||
    !prize ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm post exists to update
  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(400).json({ message: "Post not found" });
  }

  // Check for duplicate title
  const duplicate = await Post.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow renaming of the original post
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate post title" });
  }

  post.user = user;
  post.title = title;
  post.text = text;
  post.completed = completed;
  post.date = date;
  post.location = location;
  post.prize = prize;

  const updatedPost = await post.save();

  res.json(`'${updatedPost.title}' updated`);
});

// @desc Delete a post
// @route DELETE /posts
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Post ID required" });
  }

  // Confirm post exists to delete
  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(400).json({ message: "Post not found" });
  }

  // Delete image from cloudinary
  await cloudinary.uploader.destroy(post.cloudinaryId);

  const result = await post.deleteOne();

  const reply = `Post '${result.title}' with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost,
};

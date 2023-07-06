const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// @desc Get all comments
// @route GET /comments
// @access Private
const getAllComments = asyncHandler(async (req, res) => {
  // Get all comments from MongoDB
  const comments = await Comment.find().lean();

  // If no comments
  if (!comments?.length) {
    return res.status(400).json({ message: "No comments found" });
  }

  // Add username to each comment before sending the response
  const commentsWithUserAndPost = await Promise.all(
    comments.map(async (comment) => {
      const user = await User.findById(comment.createdById).lean().exec();
      const post = await Post.findById(comment.postId).lean().exec();
      return {
        ...comment,
        user: { ...user, password: undefined },
        post: post,
      };
    })
  );

  res.json(commentsWithUserAndPost);
});

// @desc Create new comment
// @route POST /comments
// @access Private
const createNewComment = asyncHandler(async (req, res) => {
  const { text, postId, createdById } = req.body;
  const user = User.findById(createdById).lean().exec();
  const createdByUsername = user.username;

  // Confirm data
  if (!text || !postId || !createdById) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title
  const duplicate = await Comment.findOne({ text })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate comment" });
  }

  // Create and store the new user
  const comment = await Comment.create({
    text,
    postId,
    createdById,
    createdByUsername,
  });

  if (comment) {
    // Created
    return res.status(201).json({ message: "New comment created" });
  } else {
    return res.status(400).json({ message: "Invalid comment data received" });
  }
});

// @desc Update a comment
// @route PATCH /comments
// @access Private
const updateComment = asyncHandler(async (req, res) => {
  const { id, text, postId, createdById } = req.body;

  // Confirm data
  if (!id || !text || !postId || !createdById) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm comment exists to update
  const comment = await Comment.findById(id).exec();

  if (!comment) {
    return res.status(400).json({ message: "Comment not found" });
  }

  // Check for duplicate comment
  const duplicate = await Comment.findOne({ text })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow changes of the original comment
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate comment" });
  }

  comment.text = text;

  const updatedComment = await comment.save();

  res.json(`'${updatedComment.text}' updated`);
});

// @desc Delete a comment
// @route DELETE /comments
// @access Private
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Comment ID required" });
  }

  // Confirm comment exists to delete
  const comment = await Comment.findById(id).exec();

  if (!comment) {
    return res.status(400).json({ message: "Comment not found" });
  }

  const result = await comment.deleteOne();

  const reply = `Comment '${result.text}' with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getAllComments,
  createNewComment,
  updateComment,
  deleteComment,
};

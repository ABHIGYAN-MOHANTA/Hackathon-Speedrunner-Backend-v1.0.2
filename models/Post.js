const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    prize: {
      type: String,
    },
    imagesrc: {
      type: String,
      default:
        "https://glueup.com/storage/app/uploads/public/5f3/652/179/5f365217936eb474613534.gif",
    },
    cloudinaryId: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);

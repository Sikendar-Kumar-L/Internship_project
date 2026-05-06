const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    dueDate: {
      type: Date,
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    label: {
      type: String,
      default: "Personal",
    },
    archived: {
  type: Boolean,
  default: false,
  },
  checklist: [
  {
    text: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Todo", todoSchema);
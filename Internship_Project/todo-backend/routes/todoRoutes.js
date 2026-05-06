const express = require("express");
const router = express.Router();

const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// CREATE
router.post("/", createTodo);

// GET ALL
router.get("/", getTodos);

// GET SINGLE
router.get("/:id", getTodoById);

// UPDATE
router.put("/:id", updateTodo);

// DELETE
router.delete("/:id", deleteTodo);

module.exports = router;
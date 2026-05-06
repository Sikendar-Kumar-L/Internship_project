const Todo = require("../models/Todo");

// CREATE TODO
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL TODOS
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE TODO
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TODO
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE TODO
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
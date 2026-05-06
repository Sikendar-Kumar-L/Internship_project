import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const API = "https://internship-project-tize.onrender.com/api/todos";

  // FETCH TODOS
  const fetchTodos = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // INITIAL LOAD
  useEffect(() => {
    fetchTodos();
  }, []);

  // DARK MODE
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  // NOTIFICATION PERMISSION
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // REMINDER ENGINE
  useEffect(() => {
    const interval = setInterval(() => {
      todos.forEach((todo) => {
        if (todo.dueDate && !todo.completed) {
          const dueTime = new Date(todo.dueDate).getTime();
          const now = new Date().getTime();
          const diff = dueTime - now;

          // Notify if due within next hour
          if (
            diff > 0 &&
            diff <= 60 * 60 * 1000 &&
            Notification.permission === "granted"
          ) {
            const remindedTasks =
              JSON.parse(localStorage.getItem("remindedTasks")) || [];

            if (!remindedTasks.includes(todo._id)) {
              new Notification(`⏰ Task Reminder: ${todo.title}`, {
                body: todo.description || "Due soon!",
              });

              localStorage.setItem(
                "remindedTasks",
                JSON.stringify([...remindedTasks, todo._id])
              );
            }
          }
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [todos]);

  // ADD TODO
  const addTodo = async (todo) => {
    try {
      const res = await axios.post(API, todo);

      setTodos([res.data, ...todos]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // TOGGLE COMPLETE
  const toggleComplete = async (id) => {
    const selectedTodo = todos.find((todo) => todo._id === id);

    if (!selectedTodo) return;

    try {
      const res = await axios.put(`${API}/${id}`, {
        completed: !selectedTodo.completed,
      });

      setTodos(
        todos.map((todo) =>
          todo._id === id ? res.data : todo
        )
      );
    } catch (error) {
      console.error("Error toggling complete:", error);
    }
  };

  // TOGGLE ARCHIVE
  const toggleArchive = async (id) => {
    const selectedTodo = todos.find((todo) => todo._id === id);

    if (!selectedTodo) return;

    try {
      const res = await axios.put(`${API}/${id}`, {
        archived: !selectedTodo.archived,
      });

      setTodos(
        todos.map((todo) =>
          todo._id === id ? res.data : todo
        )
      );
    } catch (error) {
      console.error("Error toggling archive:", error);
    }
  };

  return (
    <div className="app-layout">
      <Navbar
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="dashboard">
        <Sidebar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <Home
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          toggleArchive={toggleArchive}
          search={search}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
}

export default App;

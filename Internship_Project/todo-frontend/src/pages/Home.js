// Home.js
import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import DashboardStats from "../components/DashboardStats";

function Home({
  todos,
  addTodo,
  deleteTodo,
  toggleComplete,
  toggleArchive,
  search,
  activeFilter,
}) {
  const today = new Date();

  // STEP 1 — SEARCH FILTER
  let filteredTodos = todos.filter((todo) =>
    todo.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // STEP 2 — ARCHIVE FILTER
  if (activeFilter === "Archive") {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.archived
    );
  } else {
    filteredTodos = filteredTodos.filter(
      (todo) => !todo.archived
    );
  }

  // STEP 3 — PINNED FILTER
  if (activeFilter === "Pinned") {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.pinned
    );
  }

  // STEP 4 — CATEGORY FILTER
  if (
    ["Work", "Study", "Personal"].includes(
      activeFilter
    )
  ) {
    filteredTodos = filteredTodos.filter(
      (todo) =>
        todo.label === activeFilter
    );
  }

  // STEP 5 — SORT PINNED FIRST
  const sortedTodos = [...filteredTodos].sort(
    (a, b) => b.pinned - a.pinned
  );

  // REMINDER TASKS (Due within 24h)
  const reminderTodos = sortedTodos.filter(
    (todo) => {
      if (
        !todo.dueDate ||
        todo.completed
      )
        return false;

      const due = new Date(
        todo.dueDate
      ).getTime();

      const now =
        new Date().getTime();

      const diff = due - now;

      return (
        diff > 0 &&
        diff <=
          24 *
            60 *
            60 *
            1000
      );
    }
  );

  // TODAY TASKS
  const todayTodos = sortedTodos.filter(
    (todo) =>
      todo.dueDate &&
      new Date(
        todo.dueDate
      ).toDateString() ===
        today.toDateString() &&
      !todo.completed
  );

  // UPCOMING TASKS
  const upcomingTodos = sortedTodos.filter(
    (todo) =>
      todo.dueDate &&
      new Date(todo.dueDate) >
        today &&
      !todo.completed
  );

  // COMPLETED TASKS
  const completedTodos = sortedTodos.filter(
    (todo) => todo.completed
  );

  return (
    <main className="home">
      <TodoForm addTodo={addTodo} />

      <DashboardStats
        todos={filteredTodos}
      />

      {/* SHOW ALL FILTERED TASKS */}
      <section className="dashboard-section">
        <h2>
          📋 {activeFilter} Tasks
        </h2>

        <TodoList
          todos={sortedTodos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          toggleArchive={toggleArchive}
        />
      </section>

      {/* ARCHIVE VIEW ONLY */}
      {activeFilter !==
        "Archive" && (
        <>
          {/* DUE SOON */}
          <section className="dashboard-section">
            <h2>⏰ Due Soon</h2>

            <TodoList
              todos={reminderTodos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleArchive={toggleArchive}
            />
          </section>

          {/* TODAY */}
          <section className="dashboard-section">
            <h2>📅 Today</h2>

            <TodoList
              todos={todayTodos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleArchive={toggleArchive}
            />
          </section>

          {/* UPCOMING */}
          <section className="dashboard-section">
            <h2>⏳ Upcoming</h2>

            <TodoList
              todos={upcomingTodos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleArchive={toggleArchive}
            />
          </section>

          {/* COMPLETED */}
          <section className="dashboard-section">
            <h2>✅ Completed</h2>

            <TodoList
              todos={completedTodos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              toggleArchive={toggleArchive}
            />
          </section>
        </>
      )}
    </main>
  );
}

export default Home;

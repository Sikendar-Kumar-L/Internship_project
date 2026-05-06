import React from "react";
import {
  FaTrash,
  FaCheckCircle,
  FaRegCircle,
  FaThumbtack,
  FaArchive,
  FaInbox,
} from "react-icons/fa";

function TodoItem({
  todo,
  deleteTodo,
  toggleComplete,
  toggleArchive,
}) {
  const createdDate = new Date(
    todo.createdAt || Date.now()
  ).toLocaleDateString();

  const dueDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleString()
    : null;

  return (
    <div
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
      style={{
        backgroundColor:
          todo.color || "#ffffff",
      }}
    >
      {/* TOP */}
      <div className="todo-top">
        <button
          className="complete-btn"
          onClick={() =>
            toggleComplete(todo._id)
          }
        >
          {todo.completed ? (
            <FaCheckCircle />
          ) : (
            <FaRegCircle />
          )}
        </button>

        <div className="todo-main">
          <span>{todo.title}</span>

          {todo.description && (
            <p className="todo-description">
              {todo.description}
            </p>
          )}
          {todo.checklist &&
  todo.checklist.length > 0 && (
    <div className="todo-checklist">
      {todo.checklist.map(
        (item, index) => (
          <div
            key={index}
            className="checklist-item"
          >
            <span>
              {item.checked
                ? "✅"
                : "⬜"}{" "}
              {item.text}
            </span>
          </div>
        )
      )}
    </div>
)}
        </div>

        {todo.pinned && (
          <FaThumbtack className="pin-icon" />
        )}
      </div>

      {/* LABEL */}
      <div className="todo-label">
        {todo.label}
      </div>

      {/* PRIORITY */}
      {todo.priority && (
        <div
          className={`priority ${todo.priority.toLowerCase()}`}
        >
          {todo.priority}
        </div>
      )}

      {/* DUE DATE */}
      {dueDate && (
        <small className="todo-date">
          Due: {dueDate}
        </small>
      )}
      {dueDate &&
  new Date(todo.dueDate) >
    new Date() && (
    <div className="reminder-badge">
       Reminder Set
    </div>
)}

      <small className="todo-date">
        Created: {createdDate}
      </small>

      {/* ACTIONS */}
      <div className="todo-actions">
        <button
          className="archive-btn"
          onClick={() =>
            toggleArchive(todo._id)
          }
        >
          {todo.archived ? (
            <>
              <FaInbox /> Restore
            </>
          ) : (
            <>
              <FaArchive /> Archive
            </>
          )}
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteTodo(todo._id)
          }
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
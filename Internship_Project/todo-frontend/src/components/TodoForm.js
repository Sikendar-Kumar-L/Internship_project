import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [dueDate, setDueDate] =
    useState("");

  const [label, setLabel] =
    useState("Personal");

  const [pinned, setPinned] =
    useState(false);

  const [color, setColor] =
    useState("#ffffff");

  const [checklist, setChecklist] =
    useState([""]);

  const colors = [
    "#ffffff",
    "#fef3c7",
    "#d1fae5",
    "#dbeafe",
    "#ede9fe",
    "#fecaca",
  ];

  // CHECKLIST ITEM CHANGE
  const handleChecklistChange = (
    index,
    value
  ) => {
    const updatedChecklist = [
      ...checklist,
    ];

    updatedChecklist[index] = value;

    setChecklist(updatedChecklist);
  };

  // ADD NEW SUBTASK
  const addChecklistItem = () => {
    setChecklist([
      ...checklist,
      "",
    ]);
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      title: title.trim(),
      description,
      priority,
      dueDate,
      label,
      pinned,
      color,
      completed: false,

      checklist: checklist
        .filter(
          (item) =>
            item.trim() !== ""
        )
        .map((item) => ({
          text: item,
          checked: false,
        })),
    };

    addTodo(newTodo);

    // RESET
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setLabel("Personal");
    setPinned(false);
    setColor("#ffffff");
    setChecklist([""]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-form advanced-form"
    >
      {/* TITLE */}
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Take a note..."
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      {/* PRIORITY + LABEL + DATE */}
      <div className="form-row">
        <select
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value
            )
          }
        >
          <option value="Low">
            Low
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="High">
            High
          </option>
        </select>

        <select
          value={label}
          onChange={(e) =>
            setLabel(
              e.target.value
            )
          }
        >
          <option value="Personal">
            Personal
          </option>
          <option value="Work">
            Work
          </option>
          <option value="Study">
            Study
          </option>
        </select>

        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) =>
            setDueDate(
              e.target.value
            )
          }
        />
      </div>

      {/* PIN + COLORS */}
      <div className="form-row">
        <label className="pin-toggle">
          <input
            type="checkbox"
            checked={pinned}
            onChange={() =>
              setPinned(
                !pinned
              )
            }
          />
          📌 Pin Task
        </label>

        <div className="color-picker">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              className={`color-dot ${
                color === c
                  ? "selected"
                  : ""
              }`}
              style={{
                backgroundColor: c,
              }}
              onClick={() =>
                setColor(c)
              }
            />
          ))}
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="checklist-builder">
        <h4>Checklist</h4>

        {checklist.map(
          (item, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Subtask ${
                index + 1
              }...`}
              value={item}
              onChange={(e) =>
                handleChecklistChange(
                  index,
                  e.target.value
                )
              }
            />
          )
        )}

        <button
          type="button"
          className="add-checklist-btn"
          onClick={
            addChecklistItem
          }
        >
          + Add Subtask
        </button>
      </div>

      {/* SUBMIT */}
      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
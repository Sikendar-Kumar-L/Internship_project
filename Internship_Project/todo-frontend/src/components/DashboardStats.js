import React from "react";

function DashboardStats({ todos }) {
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  const completionRate =
    totalTasks > 0
      ? Math.round(
          (completedTasks / totalTasks) *
            100
        )
      : 0;

  const workTasks = todos.filter(
    (todo) =>
      todo.label === "Work"
  ).length;

  const studyTasks = todos.filter(
    (todo) =>
      todo.label === "Study"
  ).length;

  const personalTasks = todos.filter(
    (todo) =>
      todo.label === "Personal"
  ).length;

  return (
    <div className="stats-grid">
      {/* PROGRESS OVERVIEW */}
      <div className="progress-overview">
        <h3>Overall Productivity</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${completionRate}%`,
            }}
          ></div>
        </div>

        <span>
          {completionRate}% Complete
        </span>
      </div>

      {/* CORE STATS */}
      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{totalTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completedTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pendingTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Progress</h3>
        <p>{completionRate}%</p>
      </div>

      {/* CATEGORY STATS */}
      <div className="stat-card">
        <h3>Work</h3>
        <p>{workTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Study</h3>
        <p>{studyTasks}</p>
      </div>

      <div className="stat-card">
        <h3>Personal</h3>
        <p>{personalTasks}</p>
      </div>
    </div>
  );
}

export default DashboardStats;
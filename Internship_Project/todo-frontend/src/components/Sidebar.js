// Sidebar.js
import React from "react";
import {
  FaHome,
  FaThumbtack,
  FaArchive,
  FaBriefcase,
  FaUser,
  FaBook,
} from "react-icons/fa";

function Sidebar({
  activeFilter,
  setActiveFilter,
}) {
  const menuItems = [
    {
      name: "All",
      icon: <FaHome />,
    },
    {
      name: "Pinned",
      icon: <FaThumbtack />,
    },
    {
      name: "Archive",
      icon: <FaArchive />,
    },
    {
      name: "Work",
      icon: <FaBriefcase />,
    },
    {
      name: "Study",
      icon: <FaBook />,
    },
    {
      name: "Personal",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={
              activeFilter === item.name
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveFilter(item.name)
            }
            style={{
              cursor: "pointer",
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

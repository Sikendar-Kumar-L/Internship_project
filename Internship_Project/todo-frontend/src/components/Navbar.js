import React from "react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { FaStickyNote } from "react-icons/fa";

function Navbar({ search, setSearch, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaStickyNote className="logo-icon" />
        <h2>TO-DO Manager</h2>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
}

export default Navbar;
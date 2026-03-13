import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this path is correct
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile toggle

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-left">
        <img src={logo} alt="Smart Hospital Logo" className="logo" />
        <h2>Smart Hospital</h2>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
        <Link to="/departments" onClick={() => setMenuOpen(false)}>Departments</Link>
        <Link to="/facilities" onClick={() => setMenuOpen(false)}>Facilities</Link>
        <Link to="/announcements" onClick={() => setMenuOpen(false)}>Announcements</Link>
        <Link to="/emergency" onClick={() => setMenuOpen(false)}>Emergency Staff</Link>

        {/* Dark / Light Mode Toggle */}
        <button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
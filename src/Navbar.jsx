import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  /* const [dropdownOpen, setDropdownOpen] = useState(false); */

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    /* setDropdownOpen(false); */
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="BSC Logo" className="logo-image" />
        <span className="logo-text"></span>
      </div>

      {/* Bouton burger */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={activeSection === "impact" ? "active" : ""}
            onClick={() => handleClick("impact")}
          >
            <a href="#impact">Impact</a>
          </li>
          <li
            className={activeSection === "learn" ? "active" : ""}
            onClick={() => handleClick("learn")}
          >
            <a href="#learn">Learn</a>
          </li>

          <li
            className={activeSection === "programs" ? "active" : ""}
            onClick={() => handleClick("programs")}
          >
            <a href="#programs">Programs</a>
          </li>

          <li
            className={activeSection === "team" ? "active" : ""}
            onClick={() => handleClick("team")}
          >
            <a href="#team">Team</a>
          </li>

          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            <a href="#about">About</a>
          </li>

          <li
            className={activeSection === "gallery" ? "active" : ""}
            onClick={() => handleClick("gallery")}
          >
            <a href="#gallery">Gallery</a>
          </li>
          
          {/* Dropdown pour "Public" */}
          {/* <li 
            className={`dropdown ${activeSection === "audience" ? "active" : ""}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-trigger">
              Public
              <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4h8L6 8z"/>
              </svg>
            </span>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li onClick={() => handleClick("audience")}>
                <a href="#audience">Écoles & Universités</a>
              </li>
              <li onClick={() => handleClick("audience")}>
                <a href="#audience">Entreprises</a>
              </li>
              <li onClick={() => handleClick("audience")}>
                <a href="#audience">Centres de formation</a>
              </li>
            </ul>
          </li> */}
        </ul>

        {/* <div className="navbar-buttons">
          <button className="btn-login">Se connecter</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
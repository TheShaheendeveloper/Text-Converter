import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure the correct path

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
  
    <nav className="navbar navbar-expand-lg" > 
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Text Converter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Dark Mode
          </label>
        </div>
        </nav>
      
      );
}

export default Navbar;

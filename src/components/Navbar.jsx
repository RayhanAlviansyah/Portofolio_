import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">RHN</a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
        
        <div className="nav-action">
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

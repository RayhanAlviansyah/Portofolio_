import React from 'react';
import './Footer.css';
import ScrollReveal from './ScrollReveal';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section">
      <ScrollReveal className="container footer-container">
        <div className="footer-logo">RHN</div>
        
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
          <p className="footer-copyright">
            © 2026 Rayhan Alviansyah 
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-social">
            <a href="https://github.com/RayhanAlviansyah"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rayhanalvi/"><FaLinkedin /></a>
          </div>
          <p className="footer-email">rayhanalviansyah072@gmail.com</p>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;

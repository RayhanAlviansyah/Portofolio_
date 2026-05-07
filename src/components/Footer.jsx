import React from 'react';
import './Footer.css';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="footer-section">
      <ScrollReveal className="container footer-container">
        <div className="footer-logo">ARU</div>
        
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
          <p className="footer-copyright">
            © 2023 Abdul Rehman Ujjan 
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-social">
            <a href="#">💼</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
          </div>
          <p className="footer-email">abdulrehmanujjan@yahoo.com</p>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;

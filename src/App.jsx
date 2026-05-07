import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Interactive Background Glow */}
      <div 
        className="interactive-bg" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 189, 125, 0.08), transparent 80%)`
        }}
      ></div>
      
      {/* Dynamic ambient shapes to make it less boring */}
      <div className="ambient-shape shape-1"></div>
      <div className="ambient-shape shape-2"></div>
      <div className="ambient-shape shape-3"></div>

      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      
      {/* Floating social nav right */}
      <div className="floating-social">
        <a href="#home" title="Home">🏠</a>
        <a href="#about" title="About">👤</a>
        <a href="#portfolio" title="Portfolio">💼</a>
        <a href="#contact" title="Contact">📞</a>
      </div>
    </div>
  );
}

export default App;

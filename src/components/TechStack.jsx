import React from 'react';
import './TechStack.css';

const techStackData = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'DBeaver', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg' },
];

const TechStack = () => {
  return (
    <section className="techstack-section">
      <div className="container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="marquee-wrapper">
          <div className="marquee">
            {techStackData.map((tech, idx) => (
              <div className="tech-item glass-card" key={`first-${idx}`}>
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="tech-icon"
                  onError={(e) => { 
                    // Fallback to a generic code icon if the SVG doesn't exist (like DBeaver)
                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg";
                  }} 
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="marquee" aria-hidden="true">
            {techStackData.map((tech, idx) => (
              <div className="tech-item glass-card" key={`second-${idx}`}>
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="tech-icon"
                  onError={(e) => { 
                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg";
                  }} 
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

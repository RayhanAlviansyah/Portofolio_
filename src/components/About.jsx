import React, { useState } from 'react';
import './About.css';
import ScrollReveal from './ScrollReveal';


const About = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('Hard Skill');

  const hardSkills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'PHP & REST API', icon: '🐘' },
    { name: 'API Integration', icon: '🔗' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Git', icon: '📦' },
    { name: 'Postman', icon: '🚀' },
    { name: 'Bug Fixing & Performance', icon: '🔧' },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: '🔍' },
    { name: 'Analytical Thinking', icon: '🧠' },
    { name: 'Attention to Detail', icon: '👁️' },
    { name: 'Adaptability', icon: '🌱' },
    { name: 'Time Management', icon: '⏱️' },
  ];

  const displayedSkills = activeSkillTab === 'Hard Skill' ? hardSkills : softSkills;

  return (
    <section id="about" className="section bg-card-section">
      <ScrollReveal className="container about-container glass-card">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-subtitle">
            I'm <span className="text-accent font-bold">Rayhan Alviansyah</span>, Full Stack developer
          </p>
          <p className="about-text">
            Web & Mobile Developer yang antusias dalam membangun aplikasi menggunakan React dan Flutter. Berpengalaman dalam merancang RESTful API, integrasi data, optimasi performa, serta bug fixing untuk menciptakan aplikasi lintas platform yang andal dan berkualitas.
          </p>
        </div>

        <h3 className="skills-title">Skills</h3>
        
        <div className="about-skill-toggle">
          <button 
            className={`skill-toggle-btn ${activeSkillTab === 'Hard Skill' ? 'active' : ''}`}
            onClick={() => setActiveSkillTab('Hard Skill')}
          >
            Hard Skill
          </button>
          <span className="skill-toggle-separator">|</span>
          <button 
            className={`skill-toggle-btn ${activeSkillTab === 'Soft Skill' ? 'active' : ''}`}
            onClick={() => setActiveSkillTab('Soft Skill')}
          >
            Soft Skill
          </button>
        </div>

        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;

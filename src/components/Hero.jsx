import './Hero.css';
import ScrollReveal from './ScrollReveal';
import profile from '../assets/Profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <ScrollReveal className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, My Name Is</p>
          <h1 className="hero-title text-accent">Rayhan Alviansyah</h1>
          <h2 className="hero-subtitle">
            <span className="badge">Full Stack Developer</span>
          </h2>
          <p className="hero-description">
            Web & Mobile Developer (React & Flutter) yang berfokus pada integrasi RESTful API, optimasi performa, dan pengembangan aplikasi lintas platform yang responsif.
          </p>
          <a href="#about" className="btn-outline hero-cta">More About Me</a>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={profile} alt="Rayhan Alviansyah" className="hero-image" />
            <div className="hero-location">
              <span className="location-icon">📍</span> Bogor, Indonesia
            </div>
          </div>
        </div>

      </ScrollReveal>
    </section>
  );
};

export default Hero;

import "./HeroSection.css";
import heroBackground from "./assets/hero_back.jpg";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackground})` }}
      id="home"
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Let's build a <span className="highlight">Sickle Cell Free Community</span> together
          </h1>
          
          <p className="hero-description">
            Break Sickle Cycle (BSC) aspires to Build a Sickle Cell Free Community and become a global reference 
            in the fight against sickle cell, transforming the lives of those affected and 
            contributing to the eradication of the disease in Cameroon and world wide through 
            increased awareness and improved patient care.
          </p>
          
          <div className="hero-buttons">
            <a href="#join" className="btn-primary">Join us</a>
            <a href="#learn" className="btn-secondary">Learn more</a>
          </div>
        </div>

        {/* IMAGE À DROITE - COMMENTÉE POUR L'INSTANT */}
        {/* 
        <div className="hero-image">
          <img src={heroImage} alt="Sickle Cell Awareness" />
        </div>
        */}
      </div>

      {/* EFFET VAGUE EN BAS */}
{/*       <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
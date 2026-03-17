import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__overlay" />

      <div className="hero-section__content">
        <p className="hero-section__eyebrow">Odisha's #1 Event Platform</p>
        <h1 className="hero-section__title">
          Find the Perfect Vendor<br />for Your Event
        </h1>
        <p className="hero-section__subtitle">
          Browse 500+ verified vendors — DJ, Decor, Catering, Photography & more
        </p>
        <div className="hero-section__actions">
          <button className="hero-section__btn hero-section__btn--primary">
            Explore Services
          </button>
          <button className="hero-section__btn hero-section__btn--secondary">
            Be a Vendor
          </button>
        </div>

        <div className="hero-section__stats">
          <div className="hero-section__stat">
            <span className="hero-section__stat-num">500+</span>
            <span className="hero-section__stat-label">Vendors</span>
          </div>
          <div className="hero-section__stat-divider" />
          <div className="hero-section__stat">
            <span className="hero-section__stat-num">1200+</span>
            <span className="hero-section__stat-label">Events Hosted</span>
          </div>
          <div className="hero-section__stat-divider" />
          <div className="hero-section__stat">
            <span className="hero-section__stat-num">20+</span>
            <span className="hero-section__stat-label">Cities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

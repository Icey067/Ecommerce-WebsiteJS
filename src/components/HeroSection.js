import React from "react";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="trust-badge">
          <span className="stars">★★★★★</span>
          <span className="trust-text">Trusted by 50,000+ customers</span>
        </div>
        <h1>
          Shop Smarter, <span className="gradient-text">Live Better</span>
        </h1>
        <p className="description">
          Discover premium electronics and gadgets at unbeatable prices.
          Experience quality, innovation, and style with every purchase.
        </p>
        <div className="cta-group">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-secondary">Join 50K+ Customers</button>
        </div>
        <hr className="divider" />
        <div className="stats-row">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Products</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>4.8/5</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
      <div className="feature-card">
        <div className="card-inner">
          <div className="card-icon">👜</div>
          <h2>Premium Quality</h2>
          <p>Curated collection of the best products</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

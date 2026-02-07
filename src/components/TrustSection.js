
import React from 'react';

function TrustSection() {
  return (
    <section className="trust-section">
      <h2 className="trust-heading">
        Trusted by <span className="blue-text">100+ Brands</span>
      </h2>
      <p className="trust-subtext">
        Join thousands of satisfied customers who trust us for quality products
        and exceptional service.
      </p>
      <div className="features-grid">
        <div className="feature-item">
          <div className="icon-circle">🛡️</div>
          <h3>Secure Payments</h3>
          <p>100% secure transactions</p>
        </div>
        <div className="feature-item">
          <div className="icon-circle">🏆</div>
          <h3>Premium Quality</h3>
          <p>Only authentic products</p>
        </div>
        <div className="feature-item">
          <div className="icon-circle">⚡</div>
          <h3>Fast Delivery</h3>
          <p>Same day delivery available</p>
        </div>
        <div className="feature-item">
          <div className="icon-circle">👥</div>
          <h3>Trusted by 50K+</h3>
          <p>Happy customers worldwide</p>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;

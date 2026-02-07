
import React from 'react';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-promo">
        <div className="promo-badge">
          <span className="star-icon">★</span> Join 50,000+ Happy Customers
        </div>
        <h2>
          Your Favorite Products Are <span className="blue-text">Just</span>{" "}
          <span className="purple-text">a</span>{" "}
          <span className="pink-text">Click Away</span>
        </h2>
        <p>
          Don't miss out on amazing deals and premium quality products. Start your
          shopping journey today and experience the difference.
        </p>
        <div className="footer-ctas">
          <button className="btn-browse">🛍️ Browse All Products →</button>
          <button className="btn-support">Contact Support</button>
        </div>
      </div>
      <div className="footer-stats">
        <div className="f-stat">
          <h4>24/7</h4>
          <p>Customer Support</p>
        </div>
        <div className="f-stat">
          <h4>30 Days</h4>
          <p>Return Policy</p>
        </div>
        <div className="f-stat">
          <h4>Free</h4>
          <p>Shipping ₹999+</p>
        </div>
        <div className="f-stat">
          <h4>100%</h4>
          <p>Secure Payments</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}>
           <h1 className="edushop">EduShop</h1>
        </Link>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search products..."
          />
        </div>
        <div className="nav-actions">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <div className="cart-wrapper">
            <Link to="/cart">
              <span className="cart-icon">🛒</span>
              <span className="cart-badge">0</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

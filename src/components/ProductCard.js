
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, image, title, category, rating, description, price, outOfStock }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="product-image">
        <img src={image} alt={title} />
        {outOfStock && <span className="badge badge-out">Out of Stock</span>}
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span className="tag">{category}</span>
          <span className="rating">⭐ {rating}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">₹{price}</div>
      </div>
      </Link>
      <div style={{ padding: '0 15px 15px' }}>
        <button className="add-to-cart">🛒 Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

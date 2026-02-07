
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9000/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-details-container">
      <Link to="/" className="back-link">← Back to Products</Link>
      
      <div className="product-details-content">
        <div className="pd-image-section">
          <img src={product.image} alt={product.name} className="pd-image" />
        </div>
        
        <div className="pd-info-section">
          <span className="pd-tag">{product.category}</span>
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-rating">
            <span className="stars">★★★★☆</span> 
            <span className="rating-text">{product.rating} (236 reviews)</span>
          </div>
          <div className="pd-price">₹{product.price}</div>
          
          <p className="pd-description">{product.description}</p>
          
          <div className={`pd-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </div>
          
          <button className="btn-add-to-cart-large">
            🛒 Add to Cart
          </button>
          
          <div className="pd-features">
            <h3>Product Features</h3>
            <ul>
              <li>Premium build quality and design</li>
              <li>Advanced technology and performance</li>
              <li>Comprehensive warranty coverage</li>
              <li>Fast and reliable customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

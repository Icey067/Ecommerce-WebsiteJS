
import React from 'react';

function Cart() {
  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-empty-state">
        <div className="cart-empty-icon">
          {/* Using a simple text icon or unicode since we don't have the exact svg */}
          🛒
        </div>
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
}

export default Cart;

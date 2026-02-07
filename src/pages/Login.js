import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">EduShop Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn-login-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

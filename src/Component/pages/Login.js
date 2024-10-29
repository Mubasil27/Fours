import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
         
    // Logic for handling login (for now, just a console log)
    console.log('Email:', email, 'Password:', password);

    // Show toast notification for successful login
    toast.success('Login successfully!');

    // Clear the input fields after login
    setEmail('');  // Reset email state to an empty string
    setPassword('');  // Reset password state to an empty string
  };

  return (
    
    <div className="login-container">
        
      <div className="login-form-container">
        
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="#">Sign up here</a>
        </p>
      </div>

      {/* Toast container to display the notification */}
      <ToastContainer />
    </div>
  );
};

export default Login;

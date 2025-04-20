import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { login, user } = UserAuth();

  // useEffect(() => {
  //   if (user?.uid) {
  //     navigate('/tasks');
  //   }
  // }, [user]);
  

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = { email, password };
    

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }

    try {
      await login(email, password);
      navigate("/tasks");
    } catch (err) {
      console.log(err);
      console.log("Login failed:", err.message);
      setError("Login failed: " + err.message);
    }

    // Simulated successful login
    // setError('');
    // setSuccess(true);
    // console.log('Logged in with:', { email, password });

    // reset form values
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        {error && <div className="signin-error">{error}</div>}
        {success && <div className="signin-success">Successfully signed in!</div>}
        <form onSubmit={handleSignIn} className="signin-form">
          <input
            type="email"
            placeholder="Email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="signin-button">Sign In</button>
          
          <p style={{ textAlign: 'center' }}>
              Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

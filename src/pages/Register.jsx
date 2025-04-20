import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Register = () => {
  const { createUser } = UserAuth(); // optional: auto-login after register
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Here you could also save to localStorage or a backend
    try {
      await createUser(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    console.log('Registered:', { email, password });

    navigate('/tasks'); // go to Task Manager
  };

  return (
    <div className="task-form">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
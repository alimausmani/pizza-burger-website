import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [errors, setErrors] = useState({ fullName: '', email: '' });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.fullName) {
      valid = false;
      errors.fullName = 'Please enter a valid name';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      errors.email = 'Please enter a valid email';
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Submit the form
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <small>{errors.fullName}</small>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div className="form-group">
          <input type="checkbox" name="terms" required />
          <label>
            I agree to the <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>, and <a href="#">Content Policies</a>
          </label>
        </div>
        <button type="submit" className="create-account-btn">Create Account</button>
        <div className="or-section">
          <span>OR</span>
        </div>
        <button type="button" className="google-signin-btn">Sign in with Google</button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
}

export default Signup;

import React from 'react';
import '../styles/AuthPage.css'; // Adjust the path as necessary
import SignUpForm from '../components/SignUpForm'; // Adjust the path as necessary

const SignUpPage = () => {
  return (
    <div className="auth-page signup-page">
      <div className="auth-container">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;

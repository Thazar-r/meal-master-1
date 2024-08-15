import React from 'react';
import '../styles/AuthPage.css'; // Adjust the path as necessary
import SignInForm from '../components/SignInForm'; // Adjust the path as necessary

const LoginPage = () => {
  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <h1>Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default LoginPage;

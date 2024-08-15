import React from 'react';

const AuthForm = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;

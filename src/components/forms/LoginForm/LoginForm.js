import React from 'react';

const LoginForm = ({ handleLogin, handleLogout }) => (
  <div>
    <button onClick={handleLogin}>Login</button> {'  '}
    <button onClick={handleLogout}>Logout</button>
  </div>
);

export default LoginForm;

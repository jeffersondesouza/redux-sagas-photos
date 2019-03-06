import React from 'react';
import LoginFormContainer from '../containers/LoginContainer';
import './login.css';

const Login = () => (
  <div className="login">
    <header className="login__header">Login header</header>
    <div className="login__body">
      <LoginFormContainer />
    </div>
    <footer className="login__footer">login footer</footer>
  </div>
);

export default Login;

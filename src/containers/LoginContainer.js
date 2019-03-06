import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/forms/LoginForm/LoginForm';

class LoginFormContainer extends Component {
  handleLogin = () => {
    console.log('handleLogin:');
  };

  handleLogout = () => {
    console.log('handleLogout:');
  };

  render() {
    return (
      <Fragment>
        <LoginForm
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
      </Fragment>
    );
  }
}

const mapStateToPRops = state => ({ ...state });

export default connect(mapStateToPRops)(LoginFormContainer);

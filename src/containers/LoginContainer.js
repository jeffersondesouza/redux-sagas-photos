import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import action from '../actions/auth';

class LoginFormContainer extends Component {
  handleLogin = () => {
    console.log('handleLogin:');
    this.props.loginRequest('payload');
  };

  handleLogout = () => {
    console.log('handleLogout:');
    this.props.logoutRequest('payload');

  };

  render() {
    console.log(this.props);

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

const mapDispatchToProps = dispatch => ({
  loginRequest: (payload) => dispatch(action.loginRequest(payload)),
  logoutRequest: (payload) => dispatch(action.logoutRequest(payload)),
});

export default connect(mapStateToPRops, mapDispatchToProps)(LoginFormContainer);

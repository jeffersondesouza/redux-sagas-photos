import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import action from '../actions/auth';

class LoginFormContainer extends Component {

  


  handleLogin = () => {
    this.props.loginRequest('payload');
  };

  handleLogout = () => {
    this.props.logoutRequest('payload');
  };

  render() {
    const { isAuthorazed, isAuthorazing } = this.props.auth;

    return (
      <Fragment>
      {
        (isAuthorazed && !isAuthorazing )
        ? <Redirect to="panel" />
        :(
          <LoginForm
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          />
          )
        }
        </Fragment>
        /* 
        
      */

        /*
      <Fragment>
        <LoginForm
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
      </Fragment>
       */
    );
  }
}

const mapStateToPRops = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(action.loginRequest(payload)),
  logoutRequest: payload => dispatch(action.logoutRequest(payload))
});

export default connect(
  mapStateToPRops,
  mapDispatchToProps
)(LoginFormContainer);

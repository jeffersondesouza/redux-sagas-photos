import React, { Component, Fragment } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HttpFetch from '../services/HttpFetch';
import autAction from '../actions/auth';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidatingToken: true
    };
  }

  componentDidMount() {
    const token = HttpFetch.getToken();
    const { isAuthorazed } = this.props.auth;
    if (!token) {
      console.log('token:', token)

      this.props.history.go('/login');
      this.props.unauthorizeRoute();
      this.setState({ isValidatingToken: false });

    }else if (token) {
      console.log('validate token:', token);
      // valiate toke, colocar um IsValidating na rota pdeixar em loadng enquanto o back valida
      this.props.validateToken(token);
      this.setState({ isValidatingToken: false });
    }
  }

  goToLoginPageIfHasNoToken = () => {};

  render() {
    const { isValidatingToken } = this.state;
    const { component, ...rest } = this.props;
    const { isAuthorazed, isAuthorazing } = this.props.auth;
    console.log({ isAuthorazed, isAuthorazing });

    /*     return (
      <Route
        {...rest}
        render={props => React.createElement(component, props)}
      />
    ); */

    return isValidatingToken ? (
      <div>Loading...</div>
    ) : (
      <Route
        {...rest}
        render={props =>
          isAuthorazed ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToPRops = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  loginSuccess: payload => dispatch(autAction.loginSuccess(payload)),
  validateToken: token => dispatch(autAction.authorize(token)),
  unauthorizeRoute: () => dispatch(autAction.unauthorize())
});

export default withRouter(
  connect(
    mapStateToPRops,
    mapDispatchToProps
  )(PrivateRoute)
);

/* 

      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
      */

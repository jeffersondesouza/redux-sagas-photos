import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HttpFetch from '../services/HttpFetch';
import autAction from '../actions/auth';

class PrivateRoute extends Component {
  componentWillMount() {
    const { isAuthorazed, isAuthorazing } = this.props.auth;
    const token = HttpFetch.getToken();
    console.log('token:', token);

    if (!token) {
      this.props.unauthorizeRoute();
    }

    /*  if(token){
      console.log('autentica');
    } */
  }

  render() {
    const { component, ...rest } = this.props;
    const { isAuthorazed, isAuthorazing } = this.props.auth;
    console.log({ isAuthorazed, isAuthorazing });

    return (
      <Route
        {...rest}
        render={props =>
          isAuthorazed
            ? React.createElement(component, props)
            : <Redirect to="/login"/>
        }
      />
    );
  }
}

const mapStateToPRops = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  loginSuccess: payload => dispatch(autAction.loginSuccess(payload)),
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

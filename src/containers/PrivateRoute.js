import React, { Component, Fragment } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HttpFetch from '../services/HttpFetch';
import autAction from '../actions/auth';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: HttpFetch.getToken()
    };
  }

  componentWillMount() {
    const token = this.state.token;
    if (token) {
      this.props.validateToken(token);
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthorazed, isValidatingToken } = this.props.auth;

    if (!this.state.token) {
      this.props.unauthorizeRoute();
      return <Redirect to="/login" />;
    }

    return (isValidatingToken && !isAuthorazed) ? (
      <div>Loading...</div>
    ) : (
      <Route
        {...rest}
        render={props =>
          isAuthorazed ? (
            <Component {...props} />
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
  validateToken: token => dispatch(autAction.validateTokenRequest(token)),
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

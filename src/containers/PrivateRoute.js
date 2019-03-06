import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  componentWillMount() {
    console.log('private');
    console.log(this.props);
  }

  render() {
    const { component, ...rest } = this.props;
    const { isAuthorazed, isAuthorazing } = this.props.auth;
    console.log('isAuthorazed, isAuthorazing:', isAuthorazed, isAuthorazing);

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

export default withRouter(connect(mapStateToPRops)(PrivateRoute));

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

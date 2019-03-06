import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  componentWillMount() {
    console.log('private');
    console.log(this.props);
  }

  render() {
    const { isAuthenticated, component, ...rest } = this.props;
    // console.log(this.props);

    return (
      <Route
        {...rest}
        render={props => React.createElement(component, props)}
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

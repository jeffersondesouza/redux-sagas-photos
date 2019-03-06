import React, { Component, Fragment } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';

import HomeSite from '../../pages/HomeSite';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';

class SiteLayput extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="site-header__brand">Sagas Photos!</div>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomeSite} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default SiteLayput;

import React, { Component, Fragment } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';

import HomeSite from '../../pages/HomeSite';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SiteHeader from '../../components/SiteHeader';

class SiteLayput extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
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

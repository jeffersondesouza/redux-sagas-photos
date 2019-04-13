import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeSite from '../../pages/HomeSite';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SiteHeader from '../../components/SiteHeader';

class SiteLayput extends Component {
  render() {
    console.log('SiteLayput:');
    return (
      <div>
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={HomeSite} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <SiteHeader />
      </div>
    );
  }
}

export default SiteLayput;

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';

import Details from '../../pages/Details';
import HomePanel from '../../pages/HomePanel';
import NotFound from '../../pages/NotFound';

class PanelLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/panel" component={HomePanel} />
          <Route exact path="/panel/details" component={Details} />
          <Route component={NotFound} />

        </Switch>
      </div>
    );
  }
}

export default PanelLayout;

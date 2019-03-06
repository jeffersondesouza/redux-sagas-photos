import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';

import Details from '../../pages/Details';
import HomePanel from '../../pages/HomePanel';

class PanelLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fragment>
          <Switch>
            <Route exact path="/panel" component={HomePanel} />
            <Route exact path="/panel/details" component={Details} />
          </Switch>
        </Fragment>
      </div>
    );
  }
}

export default PanelLayout;

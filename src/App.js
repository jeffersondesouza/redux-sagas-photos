import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import configureStore from './store';

import SiteLayout from './layouts/SiteLayout';
import PanelLayout from './layouts/PanelLayout';

import './App.css';
import NotFound from './pages/NotFound';
import PrivateRoute from './containers/PrivateRoute';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute path="/panel" component={PanelLayout} />
            <Route path="/" component={SiteLayout} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

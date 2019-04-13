import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import configureStore from './store';

import SiteLayout from './layouts/SiteLayout';
import PanelLayout from './layouts/PanelLayout';

import './App.css';
import NotFound from './pages/NotFound';
import PrivateRoute from './containers/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Switch>
              <PrivateRoute path="/panel" component={PanelLayout} />
              <Route path="/" component={SiteLayout} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;

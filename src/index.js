import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from './components/Head';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <Head />
    <App />
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

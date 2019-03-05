import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../index.css';

class Head extends Component {
  render() {
    return (
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />

        <title>Sagas Photos</title>
      </Helmet>
    );
  }
}

export default Head;

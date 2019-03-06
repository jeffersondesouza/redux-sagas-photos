import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header__brand">Sagas Photos!</div>
    <nav className="site-header__nav">
      <Link className="site-header__nav-link" to="/">
        home
      </Link>
      <Link className="site-header__nav-link" to="/login">
        login
      </Link>
    </nav>
  </header>
);

export default SiteHeader;

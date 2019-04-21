import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header__brand">Sagas Photos!</div>
    <nav className="site-header__nav">
      <NavLink className="site-header__nav-link" to="/" activeClassName="link-active">
        home
      </NavLink>
      <NavLink activeClassName="link-active" className="site-header__nav-link" to="/login">
        login
      </NavLink>
    </nav>
  </header>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(SiteHeader);

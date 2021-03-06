import React, { Component } from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import actions from '../../actions';
import authActions from '../../actions/auth';

import './styles.css';

class Header extends Component {
  handleReloadImages = () => {
    this.props.loadImages();
  };

  handleLogout = () => {
    this.props.logouOut();
  };

  render() {
    console.log();

    const total = `- ${this.props.images.total}`;

    return (
      <header className="header">
        <div className="header__brand">
          <Link to="/panel" className="header__title">
            Photos, Sagas Photos!
          </Link>
        </div>
        <div className="header__action">
          <nav className="header__nav">
            <Link to="/panel/details">Details</Link>
          </nav>
          <button
            className="header__action-btn"
            onClick={this.handleReloadImages}
          >
            Realod {total}
          </button>
          <button
            className="header__action-btn header__action-btn--logout"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToPros = dispatch => ({
  loadImages: () => dispatch(actions.loadImagesRequest()),
  logouOut: () => dispatch(authActions.logoutRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Header);

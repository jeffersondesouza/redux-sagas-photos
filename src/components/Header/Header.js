import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import './styles.css';

class Header extends Component {
  handleReloadImages = () => {
    this.props.loadImages();
  };
  render() {
    console.log();

    const total = `- ${this.props.images.total}`;
    
    return (
      <header className="header">
        <div className="header__brand">Photos, Sagas Photos!</div>
        <div className="header__action">
          <button
            className="header__action-btn"
            onClick={this.handleReloadImages}
          >
            Realod {total}
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToPros = dispatch => ({
  loadImages: () => dispatch(actions.loadImagesRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Header);

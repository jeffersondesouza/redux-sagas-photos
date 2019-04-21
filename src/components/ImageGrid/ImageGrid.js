import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import './styles.css';
import HelloAlert from './HelloAlert';

export const Context = React.createContext({});

export class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  handleReloadImages = () => {
    this.props.reloadImages();
  };

  renderLoadMoreSection = (loading, handleReloadImages) => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <button className="load" type="button" onClick={handleReloadImages}>
        Load more
      </button>
    );
  };

  hadleShowTotal = v => {
  };

  render() {
    const { images, loading } = this.props;

    return (
      <div className="content">
        <Context.Provider value={{ ...this.props, hadleShowTotal: this.hadleShowTotal }}>
          <HelloAlert />
          <section className="grid">
            {images.map(image => (
              <div
                key={image.id}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
          </section>
          <div>{this.renderLoadMoreSection(loading, this.handleReloadImages)}</div>
        </Context.Provider>
      </div>
    );
  }
}

// {images, load}
const mapStateToProps = ({ images, load }) => ({
  images: images.images,
  total: images.total,
  loading: load.loading
});

const mapDispatchToPros = dispatch => ({
  loadImages: () => dispatch(actions.loadImagesRequest()),
  reloadImages: () => dispatch(actions.reloadImagesRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(ImageGrid);

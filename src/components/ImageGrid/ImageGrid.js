import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import './styles.css';

class ImageGrid extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images,  loading } = this.props;

    return (
      <div className="content">
        {loading ? (
          <div>Loadding... </div>
        ) : (
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
        )}
      </div>
    );
  }
}

// {images, load}
const mapStateToProps = ({ images, load }) => ({
  images: images.images,
  loading: load.loading,
  
});

const mapDispatchToPros = dispatch => ({
  loadImages: () => dispatch(actions.loadImagesRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(ImageGrid);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then(res => res.json())
      .then(images => {
        this.setState({
          images
        });
      });
    this.props.dispatch({ type: 'HELLO' });
  }

  render() {
    const { images } = this.state;
    console.log();

    return (
      <div className="content">
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
      </div>
    );
  }
}

// {images, load}
const mapStateToProps = ({ images, load }) => ({
  images: images.images,
  load
});

export default connect(
  mapStateToProps,
  null
)(ImageGrid);

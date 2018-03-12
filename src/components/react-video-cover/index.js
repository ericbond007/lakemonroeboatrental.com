import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * this component is a simple wrapper around <video/> that displays the video filling
 * the container, while preserving it's aspect ratio
 * this is analogous to background-size: cover for background images
 * and very easy to achieve with the css property object-fit: cover
 * unfortunately object-fit is not implemented in IE so a fallback will be used
 *
 * IF YOU DO NOT HAVE TO SUPPORT IE, you probably do not need this component
 * just have a look at the styles for the non-fallback implementation
 */
class VideoCover extends Component {

  static propTypes = {
    forceFallback: PropTypes.bool,
    remeasureOnWindowResize: PropTypes.bool,
    onFallbackDidMount: PropTypes.func,
    onFallbackWillUnmount: PropTypes.func,
    videoOptions: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    forceFallback: false,
    remeasureOnWindowResize: false,
  };

  render() {
    const style = {
      width: '100%',
      height: '100%',
      ...this.props.style,
      objectFit: 'cover',
    };
    return (
      <video
        poster='/img/landingImg-newBlur-1920w.jpg'
        muted
        webkit-playsinline='webkit-playsinline'
        type='video/mp4'
        className={this.props.className}
        style={style}
        {...this.props.videoOptions}
      />
    );
    }
  
}

export default VideoCover;

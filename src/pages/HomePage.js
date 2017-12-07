import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideosContainer from '../containers/VideosContainer'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  static propTypes = {
    videos: PropTypes.object
  }
  render() {
    const { videos } = this.props
    return (
      <div>
        {videos.map(video => (
          <div key={video.get('id')}>{video.get('title')}</div>
        ))}
      </div>
    )
  }
}

export default VideosContainer(HomePage)

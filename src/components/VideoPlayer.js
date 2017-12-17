import React, { Component } from 'react'
import { Player } from 'video-react'

class VideoPlayer extends Component {
  render() {
    const { video } = this.props
    if (!video) return null
    return (
      <Player>
        <source src={video.get('media_url')} />
      </Player>
    )
  }
}

export default VideoPlayer

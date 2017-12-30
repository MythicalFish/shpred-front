import React, { Component } from 'react'
import { Player } from 'video-react'

class VideoPlayer extends Component {
  state = { media_url: null, poster_url: null }
  componentWillMount() {
    this.initialize(this.props)
  }
  componentWillReceiveProps(newProps) {
    this.initialize(newProps)
  }
  initialize({ video }) {
    if (!video) return
    const { media_url, poster_url } = video.toObject()
    if (this.state.media_url !== media_url) {
      this.setState({ media_url, poster_url })
      if (this.player) this.player.load()
    }
  }
  handleRef = ref => (this.player = ref)
  render() {
    const { media_url, poster_url } = this.state
    if (!media_url) return null
    return (
      <Player autoPlay poster={poster_url} ref={this.handleRef}>
        <source src={media_url} />
      </Player>
    )
  }
}

export default VideoPlayer

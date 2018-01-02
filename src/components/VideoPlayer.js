import React, { Component } from 'react'
import { Player } from 'video-react'

class VideoPlayer extends Component {
  state = { show: false }
  componentWillReceiveProps() {
    this.setState({ show: false })
    setTimeout(() => {
      this.setState({ show: true })
    }, 10)
  }
  handleRef = ref => (this.player = ref)
  selectedResolution = () => {
    const { video, selectedResolution: selected } = this.props
    const resolutions = video.get('resolutions')
    if (selected && resolutions.includes(selected)) return selected
    return resolutions.get(0)
  }
  mediaURL = format => {
    const { video } = this.props
    const res = this.selectedResolution()
    const path = video.getIn(['media_urls', `${res}`, format])
    return `${video.get('storage_url')}${path}`
  }
  render() {
    const { show } = this.state
    const { video } = this.props
    if (!video || !show) return null
    return (
      <Player autoPlay poster={video.get('poster_url')} ref={this.handleRef}>
        <source src={this.mediaURL('mp4')} />
        <source src={this.mediaURL('webm')} />
      </Player>
    )
  }
}

export default VideoPlayer

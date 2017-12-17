import React, { Component } from 'react'
import VideoContainer from '../containers/VideoContainer'
import Layout from '../components/AppLayout'
import VideoPlayer from '../components/VideoPlayer'

class VideoPage extends Component {
  render() {
    const { video } = this.props
    return (
      <Layout>
        <h1>{video.get('title')}</h1>
        <VideoPlayer {...this.props} />
      </Layout>
    )
  }
}

export default VideoContainer(VideoPage)

import React, { Component } from 'react'
import VideoContainer from '../containers/VideoContainer'
import Layout from '../components/AppLayout'

class Video extends Component {
  render() {
    const { video } = this.props
    return (
      <Layout>
        <h1>{video.get('title')}</h1>
      </Layout>
    )
  }
}

export default VideoContainer(Video)

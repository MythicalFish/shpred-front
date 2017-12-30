import React, { Component } from 'react'
import Container from '../containers/VideoContainer'
import Layout from '../components/AppLayout'
import VideoPlayer from '../components/VideoPlayer'
import VideoGallery from '../components/VideoGallery'

class VideoPage extends Component {
  state = { id: null }
  componentWillMount() {
    this.initialize(this.props)
  }
  componentWillReceiveProps(newProps) {
    this.initialize(newProps)
  }
  initialize({ match: { params: { id } } }) {
    if (this.state.id !== id) {
      this.setState({ id })
      this.props.fetchVideo(id)
      if (this.props.videos.size === 0) this.props.fetchVideos()
    }
  }
  render() {
    const { video } = this.props
    return (
      <Layout>
        <h1>{video.get('title')}</h1>
        <VideoPlayer {...this.props} />
        <VideoGallery {...this.props} />
      </Layout>
    )
  }
}

export default Container(VideoPage)

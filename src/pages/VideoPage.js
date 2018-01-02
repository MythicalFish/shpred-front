import React, { Component } from 'react'
import Container from '../containers/VideoContainer'
import Layout from '../components/AppLayout'
import VideoPlayer from '../components/VideoPlayer'
import VideoGallery from '../components/VideoGallery'
import { setTitle } from '../utils/misc'

class VideoPage extends Component {
  state = { id: null, title: null }
  componentWillMount() {
    this.initialize(this.props)
  }
  componentWillReceiveProps(newProps) {
    this.initialize(newProps)
  }
  componentDidUpdate() {
    this.setTitle()
  }
  setTitle() {
    const { video } = this.props
    if (!video) return
    const { title } = video.toObject()
    if (this.state.title !== title) {
      setTitle(title)
      this.setState({ title })
    }
  }
  initialize({ match: { params: { id } } }) {
    if (this.state.id !== id) {
      this.setState({ id })
      this.props.fetchVideo(id)
      if (this.props.videos.size === 0) this.props.fetchVideos()
    }
  }
  render() {
    return (
      <Layout {...this.props}>
        <VideoPlayer {...this.props} />
        <VideoGallery {...this.props} />
      </Layout>
    )
  }
}

export default Container(VideoPage)

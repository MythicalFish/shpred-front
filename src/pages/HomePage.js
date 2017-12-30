import React, { Component } from 'react'
import Container from '../containers/VideoContainer'
import Layout from '../components/AppLayout'
import VideoGallery from '../components/VideoGallery'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchVideos()
  }
  render() {
    return (
      <Layout>
        <VideoGallery {...this.props} />
      </Layout>
    )
  }
}

export default Container(HomePage)

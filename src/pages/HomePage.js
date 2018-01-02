import React, { Component } from 'react'
import Container from '../containers/VideoContainer'
import Layout from '../components/AppLayout'
import VideoGallery from '../components/VideoGallery'
import { setTitle } from '../utils/misc'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchVideos()
    setTitle('The Love')
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

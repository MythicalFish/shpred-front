import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideosContainer from '../containers/VideosContainer'
import AppLayout from '../components/AppLayout'
import { Row, Col } from 'antd'
import Thumbnail from '../components/Thumbnail'

class HomePage extends Component {
  static propTypes = {
    videos: PropTypes.object
  }
  render() {
    const { videos } = this.props
    return (
      <AppLayout>
        <Row gutter={8}>
          {videos.map(video => (
            <Col span={6} key={video}>
              <Thumbnail video={video} />
            </Col>
          ))}
        </Row>
      </AppLayout>
    )
  }
}

export default VideosContainer(HomePage)

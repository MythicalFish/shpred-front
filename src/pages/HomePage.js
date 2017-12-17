import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideosContainer from '../containers/VideosContainer'
import Layout from '../components/AppLayout'
import Thumbnail from '../components/Thumbnail'

class HomePage extends Component {
  static propTypes = {
    videos: PropTypes.object
  }
  render() {
    const { videos } = this.props
    return (
      <Layout>
        <div className="pa3">
          <div className="row">
            {videos.map(video => (
              <div key={video} className="col-xs-3 pb3">
                <Thumbnail video={video} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default VideosContainer(HomePage)

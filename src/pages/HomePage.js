import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideosContainer from '../containers/VideosContainer'
import Header from '../components/AppHeader'
import Thumbnail from '../components/Thumbnail'

class HomePage extends Component {
  static propTypes = {
    videos: PropTypes.object
  }
  render() {
    const { videos } = this.props
    return (
      <div>
        <Header />
        <div className="row">
          {videos.map(video => (
            <div key={video} className="col-xs-3">
              <Thumbnail video={video} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default VideosContainer(HomePage)

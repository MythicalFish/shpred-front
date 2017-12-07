import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { fetchVideos } from './actions'
import * as selectors from './selectors'

const VideosContainer = Page => {
  class HOC extends Component {
    componentWillMount() {
      this.props.fetchVideos()
    }
    render() {
      return <Page {...this.props} />
    }
  }

  function mapDispatch(dispatch) {
    return bindActionCreators({ fetchVideos }, dispatch)
  }

  const mapState = createStructuredSelector({
    videos: selectors.selectVideos()
  })
  return connect(mapState, mapDispatch)(HOC)
}

export default VideosContainer

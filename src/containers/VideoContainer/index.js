import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { fetchVideos, fetchVideo } from './actions'
import * as selectors from './selectors'

const Container = Page => {
  class HOC extends Component {
    render() {
      return <Page {...this.props} />
    }
  }

  function mapDispatch(dispatch) {
    return bindActionCreators({ fetchVideos, fetchVideo }, dispatch)
  }

  const mapState = createStructuredSelector({
    videos: selectors.selectVideos(),
    video: selectors.selectVideo(),
    selectedResolution: selectors.selectResolution()
  })
  return connect(mapState, mapDispatch)(HOC)
}

export default Container

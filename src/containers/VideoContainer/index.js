import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { fetchVideo } from './actions'
import * as selectors from './selectors'

const Container = Page => {
  class HOC extends Component {
    componentWillMount() {
      const id = this.props.match.params.id
      console.log(id)
      this.props.fetchVideo(id)
    }
    render() {
      return <Page {...this.props} />
    }
  }

  function mapDispatch(dispatch) {
    return bindActionCreators({ fetchVideo }, dispatch)
  }

  const mapState = createStructuredSelector({
    video: selectors.selectVideo()
  })
  return connect(mapState, mapDispatch)(HOC)
}

export default Container

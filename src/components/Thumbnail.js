import React from 'react'
import { Link } from 'react-router-dom'

export default class Thumbnail extends React.PureComponent {
  state = { showPreview: false }
  togglePreview = () => this.setState({ showPreview: !this.state.showPreview })
  render() {
    const { video } = this.props
    return (
      <Link
        to={`/${video.get('slug')}`}
        className="thumbnail hide-child"
        onMouseOver={this.togglePreview}
        onMouseOut={this.togglePreview}
      >
        <div className="img">
          <img src={video.get('thumbnail_url')} alt={video.get('title')} />
        </div>
        {this.state.showPreview && (
          <div className="preview">
            <video autoPlay loop src={video.get('preview_url')} />
            <div className="preview-shadow" />
          </div>
        )}
        <h3 className="title child">{video.get('title')}</h3>
        <div className="meta">{video.get('length')}</div>
      </Link>
    )
  }
}

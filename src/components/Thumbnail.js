import React from 'react'
import { Link } from 'react-router-dom'

export default ({ video }) => {
  return (
    <Link to={`/${video.get('id')}`} className="thumbnail hide-child">
      <div className="img">
        <img src={video.get('thumbnail_url')} alt={video.get('title')} />
      </div>
      <h3 className="title child">{video.get('title')}</h3>
      <div className="meta">{video.get('length')}</div>
    </Link>
  )
}

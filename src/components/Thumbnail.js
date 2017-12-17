import React from 'react'

export default ({ video }) => {
  return (
    <div className="thumbnail">
      <img src={video.get('thumbnail_url')} alt={video.get('title')} />
    </div>
  )
}

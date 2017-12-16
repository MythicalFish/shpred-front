import React from 'react'

export default ({ video }) => {
  return (
    <div>
      <img src={video.get('thumbnail_url')} alt={video.get('title')} />
      <div>{video.get('title')}</div>
    </div>
  )
}

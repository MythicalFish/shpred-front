import React from 'react'
import Thumbnail from './Thumbnail'

const VideoGallery = ({ videos }) => {
  if (!videos) return null
  return (
    <div className="row no-gutter">
      {videos.map(video => (
        <div key={video} className="col-xs-12 col-md-6 col-lg-3">
          <Thumbnail video={video} />
        </div>
      ))}
    </div>
  )
}

export default VideoGallery

import React from 'react'
import Thumbnail from './Thumbnail'
import Loader from './Loader'

const VideoGallery = ({ gallery }) => {
  const { isLoading, items: videos } = gallery.toObject()
  if (isLoading) {
    return <Loader />
  }
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

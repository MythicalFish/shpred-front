export const fetchVideos = () => {
  return { type: 'FETCH_VIDEOS' }
}

export const fetchVideosSuccess = response => {
  return { type: 'FETCH_VIDEOS_SUCCESS', response }
}

export const fetchVideo = id => {
  return { type: 'FETCH_VIDEO', id }
}

export const fetchVideoSuccess = response => {
  return { type: 'FETCH_VIDEO_SUCCESS', response }
}

export const fetchVideos = () => {
  return {
    type: 'FETCH_VIDEOS'
  }
}

export const fetchVideosSuccess = response => {
  return {
    type: 'FETCH_VIDEOS_SUCCESS',
    response
  }
}

export const fetchVideo = id => {
  return {
    type: 'FETCH_VIDEO',
    id
  }
}

export const fetchVideoSuccess = response => {
  return {
    type: 'FETCH_VIDEO_SUCCESS',
    response
  }
}

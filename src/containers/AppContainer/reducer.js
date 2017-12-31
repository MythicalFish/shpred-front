import { fromJS } from 'immutable'

const initialState = fromJS({
  gallery: [],
  current: {}
})

export default (state = initialState, action) => {
  const { type, response } = action
  switch (type) {
    case 'FETCH_VIDEOS_SUCCESS':
      return state.set('gallery', fromJS(response))
    case 'FETCH_VIDEO_SUCCESS':
      return state.set('current', fromJS(response))
    default:
      return state
  }
}

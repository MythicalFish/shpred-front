import { fromJS } from 'immutable'

const initialState = fromJS({
  gallery: {
    items: [],
    isLoading: true,
    filters: {}
  },
  current: {},
  selectedResolution: null
})

export default (state = initialState, action) => {
  const { type, response } = action
  switch (type) {
    case 'FETCH_VIDEOS_SUCCESS':
      return state
        .setIn(['gallery', 'items'], fromJS(response))
        .setIn(['gallery', 'isLoading'], false)
    case 'FETCH_VIDEO_SUCCESS':
      return state.set('current', fromJS(response))
    case 'CHANGE_RESOLUTION':
      return state.set('selectedResolution', action.payload)
    default:
      return state
  }
}

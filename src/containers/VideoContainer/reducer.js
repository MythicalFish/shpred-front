import { fromJS } from 'immutable'

const initialState = fromJS({
  attributes: {}
})

export default (state = initialState, action) => {
  const { type, response } = action
  switch (type) {
    case 'FETCH_VIDEO_SUCCESS':
      return state.set('attributes', fromJS(response))
    default:
      return initialState
  }
}

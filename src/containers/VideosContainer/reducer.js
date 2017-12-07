import { fromJS } from 'immutable'

const initialState = fromJS({
  list: []
})

export default (state = initialState, action) => {
  const { type, response } = action
  switch (type) {
    case 'FETCH_VIDEOS_SUCCESS':
      return state.set('list', fromJS(response))
    default:
      return initialState
  }
}

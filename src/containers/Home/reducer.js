const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return action.response
    default:
      return initialState
  }
}

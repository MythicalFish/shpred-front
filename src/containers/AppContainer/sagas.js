import { takeLatest } from 'redux-saga/effects'
import * as sagas from '../../utils/genericSagas'
import * as actions from './actions'

// TODO:
// inject / cancel this watcher based on route
// (like react-boilerplate does it)

export default function* watcher() {
  yield takeLatest('FETCH_VIDEOS', fetchVideos)
  yield takeLatest('FETCH_VIDEO', fetchVideo)
}

function* fetchVideos({ params }) {
  yield sagas.get('videos', params, actions.fetchVideosSuccess)
}

function* fetchVideo({ id }) {
  yield sagas.get(`videos/${id}`, null, actions.fetchVideoSuccess)
}

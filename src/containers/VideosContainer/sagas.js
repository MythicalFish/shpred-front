import { take, cancel, takeLatest } from 'redux-saga/effects'
import * as sagas from '../../utils/genericSagas'
import * as actions from './actions'

// TODO:
// inject / cancel this watcher based on route
// (like react-boilerplate does it)

export default function* VideosContainerWatcher() {
  yield takeLatest('FETCH_VIDEOS', fetchVideos)
}

function* fetchVideos({ params }) {
  yield sagas.get('videos', params, actions.fetchVideosSuccess)
}

import { fork, all } from 'redux-saga/effects'
import VideosSagas from './containers/VideosContainer/sagas'
import VideoSagas from './containers/VideoContainer/sagas'

const sagas = [VideosSagas, VideoSagas]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}

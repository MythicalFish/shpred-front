import { fork, all } from 'redux-saga/effects'
import VideoSagas from './containers/VideoContainer/sagas'

const sagas = [VideoSagas]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}

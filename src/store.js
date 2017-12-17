import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { fork } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import VideosReducer from './containers/VideosContainer/reducer'
import VideosSagas from './containers/VideosContainer/sagas'
import VideoReducer from './containers/VideoContainer/reducer'
import VideoSagas from './containers/VideoContainer/sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const rootReducer = combineReducers({
    Videos: VideosReducer,
    Video: VideoReducer
  })

  function* rootSaga() {
    yield [fork(VideosSagas), fork(VideoSagas)]
  }

  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]
  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )
  sagaMiddleware.run(rootSaga)
  return store
}

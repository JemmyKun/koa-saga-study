import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/reducers';
import rootSagas from '../sagas/sagas';
import { getSagaType } from '../utils/sagaType';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, thunk, sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));
const sagaInstance = sagaMiddleware.run(rootSagas);

const action = (type, payload) => ({ type, payload });
const sagaAction = (type, payload) => ({ type: getSagaType(type), payload });
const dispatch = store.dispatch;

const initState = store.getState();
console.log('initState:', initState);

export { store, sagaInstance, action, sagaAction, dispatch }

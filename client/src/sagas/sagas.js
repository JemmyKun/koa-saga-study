import { all } from 'redux-saga/effects';
import labelSaga from './labelSaga';

export default function* rootSaga() {
    yield all([
        labelSaga()
    ])
}

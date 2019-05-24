import { takeEvery, put, call } from 'redux-saga/effects'
import { getSagaType, getReducerType } from '../utils/sagaType';
import { ADD_LABEL, DELETE_LABEL, GET_LABEL_LIST, UPDATE_LABEL_TITLE, UPDATE_LABEL_STATUS } from '../actions/actionTypes';
import * as Api from '../api/label';
import { message } from 'antd';

function* getLabelList(param) {
    let { type } = param;
    try {
        let res = yield call(Api.getLabelList);
        if (res.data.status === 200) {
            let action = {
                type: getReducerType(type),
                payload: {
                    labelList: res.data.content,
                    loading: false
                }
            }
            yield put(action);
        } else {
            message.warning('服务异常');
        }
    }
    catch (err) {
        console.log(err);
        message.warning('服务异常');
    }
}

export default function* labelSaga() {
    yield takeEvery(getSagaType(GET_LABEL_LIST), getLabelList)
}
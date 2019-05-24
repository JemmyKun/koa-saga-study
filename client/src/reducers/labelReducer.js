import { ADD_LABEL, DELETE_LABEL, GET_LABEL_LIST, UPDATE_LABEL_TITLE, UPDATE_LABEL_STATUS } from '../actions/actionTypes';
let initData = {
    labelList: [],
    loading: false
}

function labelData(data = initData, action) {
    switch (action.type) {
        case ADD_LABEL:
            return { ...data, ...action.payload }
        case DELETE_LABEL:
            return { ...data, ...action.payload }
        case GET_LABEL_LIST:
            return { ...data, ...action.payload }
        case UPDATE_LABEL_TITLE:
            return { ...data, ...action.payload }
        case UPDATE_LABEL_STATUS:
            return { ...data, ...action.payload }
        default:
            return data
    }
}

export default labelData;
const prefixer = 'WATCH_SAGA_';
const getSagaType = type => `${prefixer}${type}`;
const getReducerType = sagaType => sagaType.replace(prefixer, "");

export { prefixer, getSagaType, getReducerType };
import { combineReducers } from 'redux';

import modal from './modal_reducer';

const uiReducer = combineReducers({
    modal
});

export default uiReducer;
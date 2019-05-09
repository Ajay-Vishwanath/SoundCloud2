import { combineReducers } from 'redux';

import modal from './modal_reducer';
import playbar from './player_reducer';

const uiReducer = combineReducers({
    modal, 
    playbar 

});

export default uiReducer;
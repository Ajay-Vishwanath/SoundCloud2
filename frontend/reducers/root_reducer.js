import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import {combineReducers} from 'redux'
import uiReducer from './ui_reducer';
import songsReducer from './songs_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: uiReducer,
})

export default RootReducer;
import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import songErrorsReducer from './song_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import commentErrorsReducer from './comments_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    song: songErrorsReducer,
    user: userErrorsReducer,
    comment: commentErrorsReducer
});

export default errorsReducer;
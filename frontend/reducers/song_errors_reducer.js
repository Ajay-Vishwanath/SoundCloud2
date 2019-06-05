
import {
    RECEIVE_SONG_ERRORS,
    RECEIVE_SONG_DELETE_ERRORS, 
    RECEIVE_SONG,
    CLEAR_SONG_ERRORS,
} from '../actions/song_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG_ERRORS:
            return action.errors;
        case RECEIVE_SONG_DELETE_ERRORS:
            return Object.assign({}, {errors: action.errors})
        case RECEIVE_SONG:
            return [];
        case CLEAR_SONG_ERRORS:
            return [];
        default:
            return state;
    }
};
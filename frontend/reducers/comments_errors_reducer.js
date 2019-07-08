
import {
    RECEIVE_COMMENT_ERRORS,
    RECEIVE_COMMENT,
    CLEAR_COMMENT_ERRORS,
} from '../actions/comment_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_COMMENT:
            return [];
        case CLEAR_COMMENT_ERRORS:
            return [];
        default:
            return state;
    }
};
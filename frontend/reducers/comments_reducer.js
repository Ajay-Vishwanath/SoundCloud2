import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS,
    DELETE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge'


const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment });
        case RECEIVE_COMMENTS:
            return action.comments
        case DELETE_COMMENT:
            newState = merge(state, {})
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;

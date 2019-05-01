import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const defaultUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return defaultUser;
        default:
            return state;
    }
};

export default sessionReducer;

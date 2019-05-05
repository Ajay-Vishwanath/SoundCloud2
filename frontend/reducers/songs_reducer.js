import {
    RECEIVE_SONG,
    RECEIVE_SONGS,
    DELETE_SONGS,
} from '../actions/song_actions';

import merge from 'lodash/merge'


const songsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_SONG:
            newState = merge(state, {}, action.song)
            return newState;
        case RECEIVE_SONGS:
            newState = merge(state, {}, action.songs)
            return newState;
        case DELETE_SONGS:
            newState = merge(state, {})
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
};

export default songsReducer;

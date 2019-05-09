import {
    RECEIVE_SONG,
    RECEIVE_SONGS,
    DELETE_SONG,
} from '../actions/song_actions';   

import merge from 'lodash/merge'


const songsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song });
        case RECEIVE_SONGS:
            return action.songs
        case DELETE_SONG:
            newState = merge(state, {})
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
};

export default songsReducer;

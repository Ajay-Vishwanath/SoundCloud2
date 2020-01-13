import {connect} from 'react-redux';
import {RECEIVE_PLAYER_SONG, TOGGLE_PLAY_PAUSE} from '../actions/player_action';
import merge from 'lodash/merge';


    const defaultState = {
        currentSong: null,
        player: "",
        currentTime: 0,
        duration: 0,
    };

    const PlaybarReducer = (state=defaultState, action) => {
        Object.freeze(state)
        let newState;
        switch (action.type) {
                case RECEIVE_PLAYER_SONG:
                const audio = document.getElementById("playbar-audio-player")
                //if there is no current song or the current song is not the song that was triggered
                //to be played, play the song, change the state accordingly. 
                if (!state.currentSong || (state.currentSong && state.currentSong.id !== action.song.id)) {
                    audio.src=action.song.audioFileUrl;
                    audio.play();
                    return (
                        {currentSong: action.song,
                        player: "playing",
                        currentTime: 0,
                        duration: 0,
                        }
                    );
                //if there is a current song and the song that was sent via the action is that song,
                //pause the song if it's playing, or play the song if it's paused. Change the state
                //accordingly. 
                } else if ((state.currentSong) && (state.currentSong.id === action.song.id)) {
                    if (state.player === "playing") {
                        audio.pause();
                        newState = merge(
                            {},
                        state,
                        {player:"stopped"}
                        );
                        return newState;
                    } else {
                        audio.play();
                         newState = merge(
                            {},
                        state, 
                        {player: "playing"}
                        )
                        return newState;
                    }
                }
            case TOGGLE_PLAY_PAUSE: {
                const audio = document.getElementById("playbar-audio-player")
                if (state.player === "playing") {
                    audio.pause();
                    newState = merge(
                        {},
                    state, 
                    {player: "stopped"}
                    )
                    return newState;
                } else {
                    audio.play();
                    newState = merge(
                        {},
                    state,
                    {player: "playing"}
                    )
                    return newState; 
                }
            }
            default:
                return state;
                
        } 
    }

    export default PlaybarReducer; 

export const RECEIVE_PLAYER_SONG = 'RECEIVE_PLAYER_SONG';
export const TOGGLE_PLAY_PAUSE = "TOGGLE_PLAY_PAUSE";

export const receivePlayerSong = song => ({
    type: RECEIVE_PLAYER_SONG,
    song: song
})

export const togglePlayPause = () => ({
    type: TOGGLE_PLAY_PAUSE
})



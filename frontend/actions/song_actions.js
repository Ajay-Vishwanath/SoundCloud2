import * as SongAPIUtil from '../util/song_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const DELETE_SONG = "DELETE_SONG"
export const CLEAR_SONG_ERRORS = "CLEAR_SONG_ERRORS"
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS"

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song: song  
})

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs: songs
})

export const deleteSong = id => ({
    type: DELETE_SONG,
    id: id
})

export const receiveErrors = errors => ({
    type: RECEIVE_SONG_ERRORS,
    errors
})

export const clearSongErrors = () => ({
    type: CLEAR_SONG_ERRORS,
})

export const createSong = song => dispatch => (
    SongAPIUtil.createSong(song).then((song) => dispatch(receiveSong(song)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const fetchSong = id => dispatch => (
    SongAPIUtil.fetchSong(id).then((song) => dispatch(receiveSong(song)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const updateSong = song => dispatch => (
    SongAPIUtil.updateSong(song).then((song) => dispatch(receiveSong(song)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const removeSong = id => dispatch => (
    SongAPIUtil.deleteSong(id).then((song) => dispatch(removeSong(song.id)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

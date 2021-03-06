import * as SongAPIUtil from '../util/song_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const DELETE_SONG = "DELETE_SONG"
export const CLEAR_SONG_ERRORS = "CLEAR_SONG_ERRORS"
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS"
export const RECEIVE_SONG_DELETE_ERRORS = "RECEIVE_SONG_DELETE_ERRORS"
export const UPDATE_SONG = "UPDATE_SONG"

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song: song  
})

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs: songs
})

export const updateSong = song => ({
    type: UPDATE_SONG,
    song: song 
})

export const deleteSong = id => ({
    type: DELETE_SONG,
    id: id
})

export const receiveErrors = errors => ({
    type: RECEIVE_SONG_ERRORS,
    errors: errors
})

export const receiveDeleteErrors = errors => ({
    type: RECEIVE_SONG_DELETE_ERRORS,
    errors: errors
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

export const editSong = ({song, id}) => dispatch => (
    SongAPIUtil.updateSong(song, id).then((song) => dispatch(updateSong(song)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const removeSong = id => dispatch => (
    SongAPIUtil.deleteSong(id).then((id) => dispatch(removeSong(id)),
        err => (dispatch(receiveDeleteErrors(err.responseJSON)))
    )
) 

import * as SongAPIUtil from '../util/song_api_util'

export const RECEIVE_SONGS = "RECIEVE_SONGS"
export const RECEIVE_SONG = "RECIEVE_SONG"
export const DELETE_SONG = "DELETE_SONG"

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

export const fetchSongs = songs => dispatch => (
    SongAPIUtil.fetchSongs(songs).then((songs) => dispatch(receiveSong(songs)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const updateSong = song => dispatch => (
    SongAPIUtil.updateSong(song).then((song) => dispatch(receiveSong(songs)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const removeSong = id => dispatch => (
    SongAPIUtil.deleteSong(id).then((song) => dispatch(removeSong(song.id)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

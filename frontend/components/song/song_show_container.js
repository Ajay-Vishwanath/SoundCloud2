import {connect} from 'react-redux';
import {fetchSong, deleteSong, updateSong} from '../../actions/song_actions'
import {fetchUsers} from '../../actions/user_actions'
import { openModal } from '../../actions/modal_actions';
import SongShow from './song-show';
import {receivePlayerSong} from '../../actions/player_action';

const mapStateToProps = (state, ownProps) => {
    const song = state.entities.songs[ownProps.match.params.songId]
    let artist
    if (!song) {
        artist = "";
    } else {
        artist = state.entities.users[song.artist_id]
    }

    return{
    users: state.entities.users, 
    song: song,
    artist: artist,
    currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteSong: (id) => dispatch(deleteSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    openModal: modal => dispatch(openModal(modal)),
    receivePlayerSong: (song) => dispatch(receivePlayerSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);

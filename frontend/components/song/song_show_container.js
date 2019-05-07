import {connect} from 'react-redux';
import {fetchSong, deleteSong, updateSong} from '../../actions/song_actions'
import { openModal } from '../../actions/modal_actions';
import SongShow from './song-show';

const mapStateToProps = (state, ownProps) => ({
    users: state.entities.users,
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: (id) => dispatch(deleteSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);

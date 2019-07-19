import { deleteSong, updateSong } from '../../actions/song_actions';
import { openModal } from '../../actions/modal_actions';
import UserSongShowItem from './user-song-show-item';
import { receivePlayerSong } from '../../actions/player_action';

const mapStateToProps = (state, ownProps) => {


    return {
        song: ownProps.song,
        artist: ownProps.artist,
        currentUser: state.entities.users[state.session.id],
        currentSong: state.ui.playbar.currentSong,
        player: state.ui.playbar.player
    }
}

const mapDispatchToProps = dispatch => ({
    deleteSong: (id) => dispatch(deleteSong(id)),
    updateSong: (song) => dispatch(updateSong(song)),
    openModal: modal => dispatch(openModal(modal)),
    receivePlayerSong: (song) => dispatch(receivePlayerSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment); 

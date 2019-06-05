import { connect } from 'react-redux';
import DeleteSong from './delete_song';
import { fetchSong, removeSong } from '../../actions/song_actions';
import { clearSongErrors } from '../../actions/song_actions'
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { matchPath } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const match = matchPath(ownProps.history.location.pathname, {
        path: '/songs/:songId',
        exact: true,
        strict: false
    })
    return{
        errors: state.errors.song,
        song: state.entities.songs[match.params.songId],
        songId: match.params.songId

}};

const mapDispatchToProps = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    removeSong: (id) => dispatch(removeSong(id)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteSong));

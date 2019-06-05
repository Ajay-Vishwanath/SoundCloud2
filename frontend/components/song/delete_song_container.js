import { connect } from 'react-redux';
import DeleteSong from './delete_song';
import { fetchSong, removeSong } from '../../actions/song_actions';

const mapStateToProps = (state) => {
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
    deleteSong: (id) => dispatch(removeSong(id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteSong);

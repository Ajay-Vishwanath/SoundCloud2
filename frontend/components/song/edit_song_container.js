import { connect } from 'react-redux';
import EditSong from './edit_song';
import {fetchSong, updateSong } from '../../actions/song_actions';
import { clearSongErrors} from '../../actions/song_actions'
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
import {matchPath} from 'react-router';

const mapStateToProps = (state, ownProps) => { 
    debugger 
        const match = matchPath(ownProps.history.location.pathname, {
            path: '/songs/:songId',
            exact: true,
            strict: false
        })
    return{
    errors: state.errors.song,
    // songs: state.entities.songs
    song: state.entities.songs[match.params.songId]
    // song: state.entities.songs[ownProps.match.params.songId]

}};

const mapDispatchToProps = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    updateSong: (formData) => dispatch(updateSong(formData)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSong))

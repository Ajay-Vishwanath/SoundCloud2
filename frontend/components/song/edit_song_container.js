import { connect } from 'react-redux';
import EditSong from './edit_song';
import {fetchSong, updateSong } from '../../actions/song_actions';
import { clearSongErrors} from '../../actions/song_actions'
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return{
    errors: state.errors.song,
    song: Object.values(state.entities.songs)[0]
}};

const mapDispatchToProps = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    updateSong: (formData) => dispatch(updateSong(formData)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSong)

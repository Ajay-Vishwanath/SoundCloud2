import { connect } from 'react-redux';
import DeleteSong from './delete_song';
import { updateSong } from '../../actions/song_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
    updateSong: (song) => dispatch(updateSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteSong);

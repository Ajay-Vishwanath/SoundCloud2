import { connect } from 'react-redux';
import SongIndex from './index_song';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => ({
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
    users: Object.keys(state.entities.users).map(id => state.entities.users[id])
});

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);

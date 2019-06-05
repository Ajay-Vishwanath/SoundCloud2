import { connect } from 'react-redux';
import SongIndex from './index_song';
import { fetchSongs } from '../../actions/song_actions';
import { receivePlayerSong } from '../../actions/player_action'

const mapStateToProps = state => ({
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
    users: Object.keys(state.entities.users).map(id => state.entities.users[id]),
    player: state.ui.playbar.player, 
    currentSong: state.ui.playbar.currentSong
});

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    receivePlayerSong: (song) => dispatch(receivePlayerSong(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);

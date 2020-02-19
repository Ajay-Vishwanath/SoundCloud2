import {connect} from 'react-redux';
import {togglePlayPause} from '../../actions/player_action';
import Playbar from './player';
import {fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    const currentSong = state.ui.playbar.currentSong
    let artist
    if (!currentSong) {
        artist = "";
    } else {
        artist = state.entities.users[currentSong.artist_id]
    }

    return (
    {currentSong: currentSong,
    artist: artist,
    player: state.ui.playbar.player,
    currentTime: state.ui.playbar.currentTime,
    duration: state.ui.playbar.duration
    })
}

const mapDispatchToProps = (dispatch) => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
import {connect} from 'react-redux';
import {togglePlayPause} from '../../actions/player_action';
import Playbar from './player'; 

const mapStateToProps = (state) => ({
    currentSong: state.ui.playbar.currentSong,
    player: state.ui.playbar.player,
    currentTime: state.ui.playbar.currentTime,
    duration: state.ui.playbar.duration
})

const mapDispatchToProps = (dispatch) => ({
    togglePlayPause: () => dispatch(togglePlayPause())
})

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
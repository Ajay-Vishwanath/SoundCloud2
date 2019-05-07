import { connect } from 'react-redux'; 
import UploadSong from './upload_song'
import {createSong, clearSongErrors} from '../../actions/song_actions'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.song
}) 

const mapDispatchToProps = dispatch => ({
    // createSong: (song) => dispatch(createSong(song)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    createSong: (song) => dispatch(createSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadSong);
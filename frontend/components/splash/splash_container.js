import { connect } from 'react-redux'; 
import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from '../greeting/greeting';
import {fetchSongs} from '../../actions/song_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
        // songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
    return {
        banana: "banana",
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);

import { connect } from 'react-redux';
import { fetchUser, fetchUsers, updateUser} from '../../actions/user_actions'
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger 
    return{
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));

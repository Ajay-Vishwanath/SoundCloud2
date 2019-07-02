import { connect } from 'react-redux';
import { fetchUser, fetchUsers, updateUser} from '../../actions/user_actions'
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    return{
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

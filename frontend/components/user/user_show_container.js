import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    debugger 
    return{
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

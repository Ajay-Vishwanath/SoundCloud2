import { connect } from 'react-redux';
import { fetchUser, fetchUsers, updateUser} from '../../actions/user_actions'
import { fetchComments } from '../../actions/comment_actions'
import { fetchSongs } from '../../actions/song_actions'
import UserShow from './user_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    let comments = []
    if (Object.values(state.entities.comments).length > 0 && user) {
        Object.values(state.entities.comments).forEach(comment => {
            if (comment.artist_id === user.id) {
                comments.push(comment);
            }
        });
    }  
    return{
    user: user,
    comments: comments,
    songs: Object.keys(state.entities.songs).map(id => state.entities.songs[id]),
    currentUser: state.entities.users[state.session.id]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchComments: () => dispatch(fetchComments()),
    fetchSongs: () => dispatch(fetchSongs())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));

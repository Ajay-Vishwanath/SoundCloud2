import { connect } from 'react-redux';
import { fetchUser, fetchUsers, updateUser} from '../../actions/user_actions'
import { fetchComments, removeComment } from '../../actions/comment_actions'
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
    
    const songs = Object.keys(state.entities.songs).map(id => state.entities.songs[id])
    let userSongs = []
    if (songs && user) {
        songs.forEach(song => {
            if (song.artist_id === user.id) {
                userSongs.push(song);
            }
        })
    } 
    return{
    user: user,
    comments: comments,
    songs: songs,
    userSongs: userSongs,
    currentUser: state.entities.users[state.session.id]
}}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchComments: () => dispatch(fetchComments()),
    fetchSongs: () => dispatch(fetchSongs()),
    removeComment: (id) => dispatch(removeComment(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));

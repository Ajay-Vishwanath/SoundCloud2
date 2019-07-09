import {connect} from 'react-redux';
import {createComment, clearCommentErrors} from '../../actions/comment_actions';
import CreateComment from './create_comment'; 

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    let profilePic
    if (!currentUser) {
        profilePic = null
    } else {
        profilePic = state.entities.users[state.session.id].photoUrl
    }

    return {
    currentUser: currentUser,
    userId: state.session.id,
    profilePic: profilePic,
    songId: ownProps.songId
    } 
}

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    clearCommentErrors: () => dispatch(clearCommentErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment); 

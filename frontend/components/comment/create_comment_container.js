import {connect} from 'react-redux';
import {createComment, clearCommentErrors} from '../../actions/comment_actions';
import CreateComment from './create_comment'; 

const mapStateToProps = (state, ownProps) => ({
    profilePic: ownProps.artist.photoUrl
})

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    clearCommentErrors: () => dispatch(clearCommentErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment); 
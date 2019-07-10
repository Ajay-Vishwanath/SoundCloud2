import * as CommentAPIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments: comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment: comment
})

export const deleteComment = id => ({
    type: DELETE_COMMENT,
    id: id
})

export const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS,
})

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment).then(
        comment => dispatch(receiveComment(comment)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
)

export const fetchComments = () => dispatch => (
    CommentAPIUtil.fetchComments().then((comments) => dispatch(receiveComments(comments)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const fetchComment= id => dispatch => (
    CommentAPIUtil.fetchComment(id).then((comment) => dispatch(receiveComment(comment)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 

export const removeComment = id => dispatch => (
    CommentAPIUtil.deleteComment(id).then((id) => dispatch(deleteComment(id)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
) 
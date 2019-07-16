import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const UserCommentItem = props => {
    const { comment } = props;
    const { song } = props;

    function parsedDate(comment) {
        let createdDate = comment.created_at.toString().split('')
        let parsedDate = ""

        parsedDate += (createdDate.slice(5, 10).join(''))
        parsedDate += '-'
        parsedDate += (createdDate.slice(0, 4).join(''))
        return (parsedDate)
    }

    const handleDelete = () => {
        removeComment(comment.id)
        location.reload();
    }

    function deleteComment() {
        if (comment.artist_id === currentUser.id) {
            return (
                <button onClick={handleDelete} className="comment-delete">
                    <FontAwesomeIcon icon="trash" />
                </button>
            )
        } else {
            return null
        }
    }

    return (
        <div className="comment-idx-item">
            <Link to={`/users/${artist.id}`} className="photo-comment-item-container">
                <img className="comment-item-img" src={artistphotoUrl} />
            </Link>
            <div className="comment-item-middle">
                <Link to={`/users/${artist.id}`} className="artistlink-comment-item-container">
                    <span className="comment-item-artist-link">{artist.username}</span>
                </Link>
                <span className="comment-item-body">{comment.body}</span>
            </div>
            <div className="comment-item-right">
                <span className="comment-item-date">{parsedDate(comment)}</span>
                {deleteComment()}
            </div>
        </div>
    )
};

export default UserCommentItem;
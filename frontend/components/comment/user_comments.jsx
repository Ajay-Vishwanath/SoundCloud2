import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const UserCommentItem = props => {
    const { comment } = props;
    const { song } = props;
    const { currentUser } = props;
    debugger 

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

    if (song) {
    return (
        <div className="user-comment-idx-item">
            <div className="user-comment-item-left">
                <div className="user-comment-top">
                    <span className="user-comment-item-body">On </span>
                    <Link to={`/songs/${song.id}`} className="user-comment-song-title">{song.title}</Link>
                </div>
                <div className="user-comment-bottom">
                    <span className="user-comment-item-body">"{comment.body}"</span>
                </div>
            </div>
            
            <div className="comment-item-right">
                <span className="comment-item-date">{parsedDate(comment)}</span>
                {deleteComment()}
            </div>
        </div>
    )
    }
    else {
        return null; 
    }
};

export default UserCommentItem;
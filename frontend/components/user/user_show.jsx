import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserCommentIndexItem from '../comment/user_comments';
import UserSongShowItemContainer from '../song/user_song_show_Item_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            photoChanged: false,
            photoUrl: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId).then(result => (this.setState({photoUrl: this.props.user.photoUrl})));
        this.props.fetchSongs();
        this.props.fetchComments();
        window.scrollTo(0, 0);
        debugger 
    }

    handleUpdate(e) {
        const reader = new FileReader(); 
        const file = e.currentTarget.files[0];

        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result});
        } 

        if (file) {
        reader.readAsDataURL(file)
        const formData = new FormData();
        const userId = this.props.user.id || this.props.match.params.id 
        formData.append('user[profile_photo]', file)
        this.props.updateUser({user: formData, id: userId}).then(result => this.setState({photoChanged: !this.state.photoChanged}));
        }
    }

    commentsIndex() {
        if (this.props.comments.length > 0 && this.props.songs.length > 0) {
      
            const comments = this.props.comments.map(comment => {
                const songId = comment.song_id - 1
                return <UserCommentIndexItem comment={comment} song={this.props.songs[songId]}
                    currentUser={this.props.currentUser} removeComment={this.props.removeComment} 
                    key={comment.id}/>
            });

            return (
                <div className="comments-index-container">
                    <div className="user-show-comments-index">
                        {comments}
                    </div>
                </div>
            )
        }
    }

    songsIndex() {

        if (this.props.userSongs.length > 0 && this.props.songs.length > 0) {
            const userSongs = this.props.userSongs.map(song => {
                return <UserSongShowItemContainer song={song} artist={this.props.user}
                key={song.id}/> 
            })

            return (
                <div className="user-songs-index-container">
                    {userSongs}
                    <div className="bottom-border">
                        <img src={logourl} className="comment-logo" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="comments-index-container">
                    <div className="no-comments-container">
                        <span className="no-comments"> {this.props.user.username} has not uploaded any tracks yet.</span>
                    </div>
                    <div className="bottom-border">
                        <img src={logourl} className="comment-logo" />
                    </div>
                </div>
            )
        }
    }

    render() {

    if (!this.props.user) {
        return null; 
    }

    const photoUrl = (this.props.user.photoUrl === '') ? 
        ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (this.state.photoUrl)

    const location = (this.props.user.location === null) ?
        (null) : <span className="location">
            {this.props.user.location} 
            </span> 

    const updateImageButton = (this.props.currentUser === this.props.user) ? 
        (<label className="update-image-button"><FontAwesomeIcon icon="camera" />
        &nbsp; Update Image
        <input type="file" onChange={this.handleUpdate} className="update-prof-pic-input"></input>
        </label>) : (null)
    
    return(
        <div className="full-user-show-page">
            <GreetingContainer />
            <div className="full-user-show-container">
                <div className="full-user-show-container-2">
                    <div className="user-banner">
                        <div className="user-banner-contents">
                            <div className="user-banner-left">
                                <div className="profile-photo-container">
                                    <img src={photoUrl} className="profile-photo"/>
                                    {updateImageButton}
                                </div>
                                <div className="user-info">
                                    <span className="username">{this.props.user.username}</span>
                                    {location}
                                </div>
                            </div>
                        </div>
                        <img src={window.skyurl} id="banner-show-image" />
                    </div>
                </div>
                <div className="user-body">
                    <div className="user-body-top">
                        <span className="user-track-info">All Tracks from {this.props.user.username}</span>
                    </div>
                </div>
                <div className="user-body-bottom">
                    <div className="user-body-left">
                        {this.songsIndex()}
                    </div>
                    <div className="user-body-right">
                        <div className="user-comments-index">
                            <div className="num-user-comments">
                                <span className="num-user-comments-display"><FontAwesomeIcon icon="comment-alt" /> {this.props.comments.length} Comments</span>
                            </div>
                            {this.commentsIndex()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}; 
}

export default withRouter(UserShow) 
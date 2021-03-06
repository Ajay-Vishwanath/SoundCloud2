import React from 'react';  
import GreetingContainer from '../greeting/greeting_container'
import withRouter from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'; 
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndexItem from '../comment/comment_index_item';
import Waveform from '../Waveform/waveform'

class SongShow extends React.Component {
    constructor(props){
        super(props);
        
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    this.props.fetchUsers();
    this.props.fetchComments(); 
    window.scrollTo(0, 0)
}

userActions() { 
    if (!this.props.currentUser){
        return null
    }
    else if (this.props.song.artist_id === this.props.currentUser.id){
        return (
            <div className="userOptions">
                <button onClick={() => this.props.openModal('editpost')}><FontAwesomeIcon icon="pencil-alt"/> Edit</button>
                <button onClick={() => this.props.openModal('deletepost')}><FontAwesomeIcon icon="trash" /> Delete track</button>
            </div>
        )
        } else {
            return null 
        }
    }

commentsIndex() {
    if (this.props.comments.length !== 0) {
        const comments = this.props.comments.map( comment => {
            return <CommentIndexItem key={comment.id} comment={comment} artist={this.props.users[comment.artist_id]} 
            currentUser={this.props.currentUser} removeComment={this.props.removeComment}/>
        });

        return (
            <div className="comments-index-container">
                <div className="num-comments-display-container">
                    <span className="num-comments-display"><FontAwesomeIcon icon="comment-alt" /> {this.props.comments.length} Comments</span>
                </div>
                <div className="song-show-comments-index">
                    {comments}
                </div>
                <div className="bottom-border">
                    <img src={logourl} className="comment-logo" />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="comments-index-container">
                <div className="no-comments-container">
                    <span className="no-comments"> This song does not yet have comments. Be the first
                    to comment on {this.props.song.title}.</span>
                </div>
                <div className="bottom-border">
                    <img src={logourl} className="comment-logo" />
                </div>
            </div>
        )
    }
}
handlePlayPause(e) {
        e.preventDefault();
        this.props.receivePlayerSong(this.props.song)
    }

    render() {
        const {song, artist} = this.props;
        if (!song || !artist ) {
            return null;
        }

        const button = (this.props.player === "playing" && this.props.song.id === this.props.currentSong.id) ?
            (<button onClick={this.handlePlayPause} className="pause-button-show">  <img src={window.pausebuttonurl} className="play-button-show-image" /> </button>) 
            : (<button onClick={this.handlePlayPause} className="play-button-show">  <img src={window.playbuttonurl} className="play-button-show-image" /> </button>
        )

        const artistphotoUrl = (artist.photoUrl === '') ?
            ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (artist.photoUrl)

        const description = (song.description) ?
            (<div className="description-container">
                <span className="song-description">{song.description}</span>
            </div>) : null;

        const waveForm = (this.props.song) ?
            (<Waveform audioFileUrl={this.props.song.audioFileUrl} song={song} currentSong={this.props.currentSong}/>) : null

        return(
        <div className="full-show-page">
            <GreetingContainer/>
                <div className="song-show-container">
                        <div className="song-banner">
                            <div className="song-banner-contents">
                                    <div className="song-banner-left">
                                        <div className="song-banner-top-left">
                                            <div className="song-banner-info">
                                                <div className="show-play-button">
                                                    {button}
                                                </div>
                                                <div className="showsonginfo">
                                                    <a href={`/#/users/${artist.id}`} className="show-artist-link">{artist.username}</a>
                                                    <div className="song-name-container"><span id="show-song-name">{song.title}</span></div>
                                                </div>
                                            </div>
                                            <p className="songshowgenre"># {song.genre}</p> 
                                        </div> 
                                        <div className="show-waveform">
                                            {waveForm} 
                                        </div>
                                    </div>
                                    <div className="song-photo-container">
                                        <img src={song.photoUrl} id="song-show-image"/>
                                    </div>
                            </div>
                            <img src={window.skyurl} id="banner-show-image" /> 
                        </div>
                        <div className="song-show-body">
                            <div className="song-show-body-main">
                                <div className="about-row">
                                    <CreateCommentContainer songId={song.id} /> 
                                    {this.userActions()}
                                </div>
                                <div className="prof-and-comments">
                                    <div className="song-show-user-info">
                                        <Link to={`/users/${artist.id}`}>
                                            <img src={artistphotoUrl} className="profile-pic-song-show"/>
                                        </Link>
                                        <Link to={`/users/${artist.id}`} className="username-link">
                                            <span className="username-song-show-info">{artist.username}</span>
                                        </Link>
                                    </div>
                                    <div className="right-side">
                                    {description}
                                    {this.commentsIndex()}
                                    </div>
                                </div>
                            </div>

                            <div className="song-show-body-right">

                            </div>
                        </div>
                </div>
        </div>
    )};
}

export default SongShow;
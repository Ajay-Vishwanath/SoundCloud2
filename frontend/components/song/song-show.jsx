import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import withRouter from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SongShow extends React.Component {
    constructor(props){
        super(props);
        
        this.handlePlayPause = this.handlePlayPause.bind(this);
    }

componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    this.props.fetchUsers();
}

// componentDidUpdate() {
//     if (!this.props.song) {
//         this.props.fetchSong(this.props.match.params.songId);
//     }
// }

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
        )}
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
    
        return(
        <div className="full-show-page">
            <GreetingContainer/>
                <div className="song-show-container">
                    <div className="song-show-container-2">
                        <div className="song-banner">
                            <div className="song-banner-contents">
                                    <div className="song-banner-left">
                                        <div className="song-banner-info">
                                            <div className="show-play-button">
                                            <button onClick={this.handlePlayPause} className="play-button-show">  <img src={window.playbuttonurl} className="play-button-show-image"/>
                                            </button>
                                            </div>
                                            <div className="showsonginfo">
                                            <a href="/#/upload" className="show-artist-link">{artist.username}</a>
                                            <span id="show-song-name">{song.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="songbannermiddle">
                                        <p className="songshowgenre"># {song.genre}</p>
                                    </div>
                                    <div className="song-photo-container">
                                        <img src={song.photoUrl} id="song-show-image"/>
                                    </div>
                            </div>
                            <img src={window.skyurl} id="banner-show-image" /> 
                        </div>
                        <div className="song-show-body">
                            <div className="userSongButtons">
                                {this.userActions()}
                            </div>
                            <p>{song.description}</p>
                        </div>
                    </div>
                </div>
        </div>
    )};
}

export default SongShow;
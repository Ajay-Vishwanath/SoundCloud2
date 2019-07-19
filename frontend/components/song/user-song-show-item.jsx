import React from 'react';
import {Link} from 'react-router-dom';
import Waveform from '../Waveform/waveform';

class UserSongShowItem extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlayPause = this.handlePlayPause.bind(this);
        this.parsedDate = this.parsedDate.bind(this);
        this.userActions = this.userActions.bind(this); 
    }

    handlePlayPause(e) {
        e.preventDefault();
        this.props.receivePlayerSong(this.props.song)
    }

   parsedDate(song) {
        let createdDate = song.created_at.toString().split('')
        let parsedDate = ""

        parsedDate += (createdDate.slice(5, 10).join(''))
        parsedDate += '-'
        parsedDate += (createdDate.slice(0, 4).join(''))
        return (parsedDate)
    }

    userActions() {
        if (!this.props.currentUser) {
            return null
        }
        else if (this.props.song.artist_id === this.props.currentUser.id) {
            return (
                <div className="userOptions">
                    <button onClick={() => this.props.openModal('editpost')}><FontAwesomeIcon icon="pencil-alt" /> Edit</button>
                    <button onClick={() => this.props.openModal('deletepost')}><FontAwesomeIcon icon="trash" /> Delete track</button>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        const button = (this.props.player === "playing" && this.props.song.id === this.props.currentSong.id) ?
            (<button onClick={this.handlePlayPause} className="pause-button-show">  <img src={window.pausebuttonurl} className="play-button-show-image" /> </button>)
            : (<button onClick={this.handlePlayPause} className="play-button-show">  <img src={window.playbuttonurl} className="play-button-show-image" /> </button>
            )
        
        const waveForm = (this.props.song) ?
            (<Waveform audioFileUrl={this.props.song.audioFileUrl} song={this.props.song} currentSong={this.props.currentSong} />) 
            : null
        
        
        return(
            <div className="user-song-item-container">
                <Link to={`/songs/${this.props.song.id}`} className="user-song-item-left">
                    <img src={this.props.song.photoUrl} className="user-song-item-image"/>
                </Link>

                <div className="user-song-item-right">
                    
                    <div className="user-song-item-top-right">
                        <div className="user-song-item-info-left">
                            <div className="user-play-button">
                                {button}
                            </div>
                            <div className="user-and-song-names">
                                <span className="user-artist-name">
                                    {this.props.artist.username}
                                </span>
                                <Link to={`/songs/${this.props.song.id}`} className="user-song-name-container">
                                    <span id="user-song-name">
                                        {this.props.song.title}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="user-song-item-info-right">
                            <span className="user-song-created-date">
                                {this.parsedDate(this.props.song)}
                            </span>
                            <span className="user-song-genre">
                                # {this.props.song.genre}
                            </span>
                        </div>
                    </div>

                    <div className="user-song-item-middle-right">
                        <div className="user-song-waveform">
                            {waveForm}
                        </div>
                    </div>

                    <div className="user-song-item-bottom-right">
                        <div className="user-show-user-actions">
                            {this.userActions()}
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
    
} 

export default UserSongShowItem; 
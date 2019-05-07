import React from 'react';
import GreetingContainer from '../greeting/greeting_container'

class SongShow extends React.Component {
    constructor(props){
        super(props);
        
    }


componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    }

userActions() {
    if (this.props.song.artist_id === this.props.currentUser.id){
        return (
            <div className="userOptions">
                <button onClick={this.props.openModal('editpost')}></button>
                <button onClick={this.props.openModal('deletepost')}></button>
            </div>
        )}
    }

    render() {
        const {users, song} = this.props;
        return(
        <div className="full-show-page">
            <GreetingContainer/>
                <div className="song-show-container">
                    <div className="song-show-container-2">
                        <div className="song-banner">
                            <div className="song-banner-contents">
                                <div className="song-banner-left">
                                    <div className="song-banner-info">
                                        <a href="/#/upload">{users[song.artistId]}</a>
                                        <span id="song-name">{song.title}</span>
                                    </div>
                                </div>
                                <p># {song.genre}</p>
                                <div classname="song-photo-container">
                                    <img src={song.photoUrl} id="song-show-image"/>
                                </div>
                            </div>
                        </div>
                        <div className="song-show-body">
                            {this.userActions()}
                            <p>{song.description}</p>
                        </div>
                    </div>
                </div>
        </div>
    )};
}

export default SongShow;
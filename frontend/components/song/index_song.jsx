import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SongIndexItem from './index_song_item';
import { withRouter } from 'react-router-dom';

class SongIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    componentDidUpdate(prevProps) {
        debugger 
        if (this.props.history.location.pathname !== prevProps.location.pathname) {
            this.props.fetchSongs(); 
        }
    }

    render() {
        const songs = this.props.songs.reverse().map(song => {
            // // const users = this.props.users 
            // user = users[song.artistId]
            return <SongIndexItem key={song.id} song={song} player={this.props.player} 
            receivePlayerSong={this.props.receivePlayerSong} currentSong={this.props.currentSong}/>
        });

        return(
            <div className="full-page">
                <GreetingContainer />
                <div className="song-index-container">
                    <div className="song-index-container-2">
                        <div className="song-index-content">
                            <div className="index-text">
                                <h2>The Drop</h2>
                                <p>New music, updated all the time</p>
                            </div>
                            <div className="full-song-index">
                                <div className="left-idx">
                                    <ul className="full-song-list">
                                        {songs}
                                    </ul>
                                </div>
                                <div className="idx-right-sidebar">
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SongIndex); 
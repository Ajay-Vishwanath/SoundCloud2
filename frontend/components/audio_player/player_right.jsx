import React from 'react';
import {Link} from 'react-router-dom';

const PlayerRight = props => {
    const {song} = props;
    const {artist} = props; 

    return (
        <div className="player-right">
            <div className="player-photo-container">
                <img src={song.photoUrl} className="song-player-photo"/>
            </div>
            <div className="song-player-right-right">
                <span className="player-artist-name">
                    {artist.username}
                </span>
                <Link to={`songs/${song.id}`} className="player-song-name">
                    {song.title}
                </Link>
            </div>
        </div>
    )
}

export default PlayerRight; 
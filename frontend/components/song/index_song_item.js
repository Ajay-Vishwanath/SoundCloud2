import React from 'react';
import {Link} from 'react-router-dom';

const SongIndexItem = props => {
    const {song} = props;

    return (
        <div className="song-item">
        <Link to={`songs/${song.id}`} className="index-links">
            <img className="index-song-img" src={song.photoUrl} className="song-idx-images"/>
            <p className="index-song-title">{song.title}</p>
        </Link>
        <p className="song-idx-genre">{song.genre}</p>
        </div>
    )
};

export default SongIndexItem;
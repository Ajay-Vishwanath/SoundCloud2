import React from 'react';
import {Link} from 'react-router-dom';



const SongIndexItem = props => {
    const {song} = props;
    const {player} = props 
    const {receivePlayerSong} = props 
    const {currentSong} = props

    const handlePlayPause = (e) => {
        e.preventDefault();

        {receivePlayerSong({song}.song)} 
    }

    const button = (player === "playing" && song.id === currentSong.id) ?
        (<button onClick={handlePlayPause} className="pause-button-show">  <img src={window.pausebuttonurl} className="play-button-index-image" /> </button>)
        : (<button onClick={handlePlayPause} className="play-button-show">  <img src={window.playbuttonurl} className="play-button-index-image" /> </button>
    )

    return (
        <div className="song-item">
        <Link to={`songs/${song.id}`} className="index-links">
            <div className="index-song-image-container"> 
            <img className="index-song-img" src={song.photoUrl} className="song-idx-images"/>
                <div className="index-play-button">
                    {button}
                </div>
            </div> 
            <p className="index-song-title">{song.title}</p>
        </Link>
        <p className="song-idx-genre">{song.genre}</p>
        </div>
    )
};

export default SongIndexItem;
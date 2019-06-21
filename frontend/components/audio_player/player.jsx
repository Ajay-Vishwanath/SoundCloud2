
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Playbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: 0,
            duration: 500
        }

        this.getTime = this.getTime.bind(this);
        this.toggleplay = this.toggleplay.bind(this);
    }

    componentDidMount() {
        this.audio = document.getElementById("playbar-audio-player")
        this.playbarAudio.addEventListener("timeupdate", e => {
             this.setState({
                 currentTime: e.target.currentTime,
                 duration: e.target.duration
             });
         });
    }

    componentDidUpdate() {
        if ((this.props.currentSong) && this.state.currentTime === this.state.duration) {
            debugger 
            this.props.togglePlayPause();
            this.setState({
                currentTime: 0,
                duration: 500
            })
        }
    }

     componentWillUnmount() {
         this.player.removeEventListener("timeupdate", () => { });
     }

    getTime(time) {
    if (!isNaN(time)) {
        return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
    }

    toggleplay() {
        if (!this.props.currentSong) {
            return null;
        } else if (this.props.player === "playing") {
            this.audio.pause();
            this.props.togglePlayPause();
        } else {
            this.audio.play();
            this.props.togglePlayPause();
        }
        }

    render () {
        
        const currentTime = (this.props.currentSong) ?
            (this.getTime(this.state.currentTime)) : null 

        const duration = (this.props.currentSong) ?
            (this.getTime(this.state.duration)) : null  

       const playPause = (this.props.player === "playing") ? 
            (<button onClick={this.toggleplay} className="play-button"><FontAwesomeIcon icon="pause" color="black"/></button>) :
            (<button onClick={this.toggleplay} className="play-button"><FontAwesomeIcon icon="play" color="black" /></button>
            );
        
        return(
            <div className="playbar-full">
                <div className='playbar-contents'>
                    <audio ref={ref => (this.playbarAudio = ref)}id="playbar-audio-player">
                        <source type="audio/mp3" />
                    </audio>
                    <div className="playbar-left">
                        <div className="playbar-buttons">
                            <div className="rewindButton">
                                <FontAwesomeIcon icon="step-backward" color="black" opacity=".2" className="rewind-button"/>
                            </div>
                                {playPause}
                            <div className="fastforwardButton">
                                <FontAwesomeIcon icon="step-forward" color="black" opacity=".2" className="fastforward-button"/>
                            </div>
                            <p className="playbar-current-time">{currentTime}</p>
                        </div>
                    </div>
                    <div className="playbar-middle">
                        <p className="playbar-song-duration">{duration}</p>
                    </div>
                    <div className="playbar-right">
                    </div>
                </div>
            


            </div>
        )
    }
};

export default Playbar;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlayerRight from './player_right'; 

class Playbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTime: 0,
            duration: 500,
            ended: false 
        }

        this.getTime = this.getTime.bind(this);
        this.toggleplay = this.toggleplay.bind(this);
        this.handleClick = this.handleClick.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUsers(); 
        this.audio = document.getElementById("playbar-audio-player")
        this.playbarAudio.addEventListener("timeupdate", e => {
             this.setState({
                 currentTime: e.target.currentTime,
                 duration: e.target.duration,
                 ended: false 
             });
         });
    }

    componentDidUpdate() {
        var that = this 
        if ((this.props.currentSong) && this.state.currentTime === this.state.duration && this.state.ended === false) {
            this.setState({
                ended: true 
            })
            setTimeout(function(){
                that.props.togglePlayPause() 
                that.setState({
                    currentTime: 0,
                })}, 1000)
        }
    }

     componentWillUnmount() {
         this.player.removeEventListener("timeupdate", () => { });
     }

     handleClick(e){
         debugger 
         e.preventDefault() 
         const percent = e.nativeEvent.offsetX/ e.currentTarget.offsetWidth
         this.playbarAudio.currentTime = percent * this.playbarAudio.duration;
         this.progressBar.value = percent / 100 
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
        
        const progressBar = (this.props.currentSong) ?
            (   
                <progress id="progress-bar" value={this.state.currentTime/this.state.duration}
                ref={ref => (this.progressBar = ref)} onClick={this.handleClick} />

            ) : null

       const playPause = (this.props.player === "playing") ? 
            (<button onClick={this.toggleplay} className="play-button"><FontAwesomeIcon icon="pause" color="black"/></button>) :
            (<button onClick={this.toggleplay} className="play-button"><FontAwesomeIcon icon="play" color="black" /></button>
            );
        
        const volumeIcon =(this.props.currentSong) ? 
                (<button className="volume-icon"><FontAwesomeIcon icon="volume-up" color="black" /></button>) : null 

        const playerRight =(this.props.currentSong)? 
                (<PlayerRight song={this.props.currentSong} artist={this.props.artist}/>) : null 

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
                        </div>
                    </div>
                    <div className="playbar-middle">
                        <p className="playbar-current-time">{currentTime}</p>
                        {progressBar}
                        <p className="playbar-song-duration">{duration}</p>
                        {volumeIcon}
                    </div>
                        {playerRight}
                </div>

            </div>
        )
    }
};

export default Playbar;

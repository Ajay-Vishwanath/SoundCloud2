require('wavesurfer.js');
require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

class Waveform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSong: this.props.currentSong,
            isComponentMounted: false,
            pos: 0,
            currentTime: 0,
            duration: 500,
            ended: false,
            eventListener: 'off'
        };

        this.audio = document.getElementById("playbar-audio-player")
        this.wavesurfer = document.getElementById
        this.handlePosChange = this.handlePosChange.bind(this);
    }

    componentDidMount() { 
        if (this.props.currentSong) {
            this.audio.addEventListener("timeupdate", e => {
                this.setState({
                    currentTime: e.target.currentTime,
                    duration: e.target.duration,
                    ended: false,
                    pos: e.target.currentTime
                });
            });
    }
    }

    componentWillUpdate(prevProps){
        debugger 
        if (this.props.currentSong && this.state.eventListener === 'off'){
            debugger 
            this.setState({
                eventListener: 'on',
                currentSong: this.props.currentSong})
            this.audio.addEventListener("timeupdate", e => {
                this.setState({
                    currentTime: e.target.currentTime,
                    duration: e.target.duration,
                    pos: e.target.currentTime
                });
            });
        }
    }

    componentWillUnmount() {    
        this.audio.removeEventListener("timeupdate", () => { });
    }

    handlePosChange(e) {
        debugger 
        this.setState({
            pos: e.originalArgs[0] 
        });
    }
    render() {
        const options = {
            cursorWidth: 0,
            progressColor:"#FF5500",
            waveColor:"#F2F2F2",
            barWidth: 2
        }
        
        if (this.props.audioFileUrl) {

        return (
            <div>
                <Wavesurfer
                    audioFile={this.props.audioFileUrl}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                    className="show-waveform"
                    options={options}
                />
            </div>
        );
        } 
    }
}

export default Waveform
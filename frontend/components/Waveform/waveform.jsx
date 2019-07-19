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
            if (this.props.currentSong.id === this.props.song.id) {
                this.setState({eventListener: 'on'})
                this.audio.addEventListener("timeupdate", e => {
                    this.setState({
                        currentTime: e.target.currentTime,
                        duration: e.target.duration,
                        ended: false,
                        pos: e.target.currentTime
                    });
                });
            };
        };
    };


    componentWillUpdate(prevProps){
        if (this.props.currentSong) {
            if (this.props.currentSong.id === this.props.song.id && this.state.eventListener === 'off'){
                    this.setState({ eventListener: 'on' })
                    this.audio.addEventListener("timeupdate", e => {
                        this.setState({
                            currentTime: e.target.currentTime,
                            duration: e.target.duration,
                            ended: false,
                            pos: e.target.currentTime
                        });
                    });
            };
        }; 
    }

    componentDidUpdate() {
        var that = this;
        if (this.props.currentSong) {
            if (this.props.currentSong.id === this.props.song.id && this.state.eventListener === 'off') {
                this.setState({ eventListener: 'on' })
                this.audio.addEventListener("timeupdate", e => {
                    this.setState({
                        currentTime: e.target.currentTime,
                        duration: e.target.duration,
                        ended: false,
                        pos: e.target.currentTime
                    });
                });
            };
            if (this.state.pos === this.state.duration && this.state.ended === false) {
                this.setState(
                { ended: true}
                )

                setTimeout(function () {
                that.setState({
                    pos: 0,
                    currentTime: 0
                })}, 1000)
            }
        };
    }

    componentWillUnmount() {    
        this.audio.removeEventListener("timeupdate", () => { });
    }

    handlePosChange(e) {
        if (this.props.currentSong.id === this.props.song.id) {
            if (Math.abs(this.state.pos - e.originalArgs[0]) > 1) {
            this.setState({
                pos: e.originalArgs[0]
            });
            this.audio.currentTime = e.originalArgs[0]
        }
    }
}

    render() {
        
        if (this.props.audioFileUrl && this.props.yup) {

            const options = {
                cursorWidth: 0,
                progressColor: "#FF5500",
                waveColor: "#F2F2F2",
                barWidth: 2,
                hideScrollbar: true,
                height: 60
            }

        return (
            <div>
                <Wavesurfer
                    audioFile={this.props.audioFileUrl}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                    id="show-waveform"
                    options={options}
                />
            </div>
        );
        } else if (this.props.audioFileUrl) {
            const options = {
                cursorWidth: 0,
                progressColor: "#FF5500",
                waveColor: "#F2F2F2",
                barWidth: 2,
                hideScrollbar: true,
            }

            return (
                <div>
                    <Wavesurfer
                        audioFile={this.props.audioFileUrl}
                        pos={this.state.pos}
                        onPosChange={this.handlePosChange}
                        playing={this.state.playing}
                        id="show-waveform"
                        options={options}
                    />
                </div>
        )} 
            else {
                return null; 
        }
    }
}

export default Waveform
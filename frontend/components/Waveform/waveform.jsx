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
            pos: 0,
        };

        this.handlePosChange = this.handlePosChange.bind(this);
        debugger 
    }

    handlePosChange(e) {
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
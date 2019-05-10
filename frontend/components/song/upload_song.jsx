import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UploadSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                title: '',
                genre: '',
                description: '',
                photoFile: null,
                photoUrl: 'https://s3-us-west-1.amazonaws.com/soundcloud-2-seeds/md_5a98274026507.png',
                audioFileUrl: null,
                loading: false
        }

        this.handleAudioFile = this.handleAudioFile.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.goHome = this.goHome.bind(this);   
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        if (this.state.photoFile) {
            formData.append('song[photo]', this.state.photoFile);
        }
        if (this.state.audioFile) {
            formData.append('song[audio_file]', this.state.audioFile);
        }
        this.setState({
            loading: true
        }); 
        this.props.createSong(formData, this.state.id).then(res => this.props.history.push(`/discover`), err => (this.setState({
            loading: false
        }) ));
    }

    handlePhotoFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } 
    }

    handleAudioFile(e) {
        this.setState({ audioFile: e.currentTarget.files[0] });
    }

    goHome() {
        this.props.history.push("/discover"); 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render () {

        const loading = (this.state.loading) ? 
            (<div className="loading-button">
                <FontAwesomeIcon icon="circle-notch" size="lg" color="black" className="spinner"/>
            </div>) : 
            (<div className="form-buttons">
                <button id="cancel" onClick={this.goHome}>Cancel</button>
                <button type="submit" id="save" onSubmit={this.handleSubmit}>Save</button>
            </div> );

        return (
        <div>
            <GreetingContainer /> 
                <div className="container-main-upload">
                        <div className="upload-form-box">
                        <h2 id="upload-header">Upload Your Track</h2>
                            <form onSubmit={this.handleSubmit} className="formuploadbox">
                            <div className="form-elements">
                                <div className="left-upload">
                                    <div className="photo-upload">
                                    {/* <div id="preview-photo-container"> */}
                                    <img className="song-photo-preview" src={this.state.photoUrl}/>
                                    {/* </div> */}
                                        <p className="label1">Artwork:</p>
                                        <input type="file" onChange={this.handlePhotoFile} className="input-buttons"/>
                                    </div>

                                    <div className="audio-upload">
                                        <p className="label1">Audio File:</p>
                                        <input type="file" onChange={this.handleAudioFile} />
                                    </div>
                                </div>
                                <div className="right-upload">
                                    <label >Title <span className="red">*</span>
                                    <input type="text" onChange={this.update("title")}
                                    placeholder="Name your track" id="upload-title"/>
                                    </label>

                                    <label id="genre-container">Genre <span className="red">*</span>
                                    <br/> 
                                    <input type="text" onChange={this.update("genre")}
                                    placeholder="None" id="genre"/>
                                    </label>

                                    <label id="description-container">Description 
                                    <br/>
                                    <textarea onChange={this.update("description")}
                                    placeholder="Describe your track" id="upload-description"/>
                                    </label>

                                    <div className="formerrors">
                                        {this.renderErrors()}
                                    </div>

                                </div>
                            </div>
                           
                            {loading}
                        </form>
                    </div>
                </div>
        </div>
        )
    }
}

export default UploadSong;
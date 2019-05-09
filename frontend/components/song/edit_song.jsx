import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router-dom';

class EditSong extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            id: this.props.song.id,
            title: this.props.song.title,
            genre: this.props.song.genre,
            description: this.props.song.description || "",
            photoFile: this.props.song.photoFile,
            photoUrl: this.props.song.photoUrl,
            loading: false
        }

        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearSongErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        // const formData = new FormData();
        // formData.append('song[title]', this.state.title);
        // formData.append('song[genre]', this.state.genre);
        // formData.append('song[description]', this.state.description);
        // if (this.state.photoFile) {
        //     formData.append('song[photo]', this.state.photoFile);
        // }
        this.setState({
            loading: true
        });
        this.props.updateSong(this.state).then(this.props.closeModal), err => (this.setState({
            loading: false
        }));
    }

    handlePhotoFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
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

    render() {

        const loading = (this.state.loading) ?
            (<div className="loading-button">
                <FontAwesomeIcon icon="circle-notch" size="lg" color="black" className="spinner" />
            </div>) :
            (<div className="form-buttons">
                <button id="cancel" onClick={this.props.closeModal}>Cancel</button>
                <button type="submit" id="save" onSubmit={this.handleSubmit}>Save</button>
            </div>);

        return (
            <div className="edit-container">
                <div className="container-edit-main-upload">
                    <div className="upload-form-box-edit">
                        <h2 id="upload-header">Edit Your Track</h2>
                        <form onSubmit={this.handleSubmit} className="formuploadbox-edit">
                            <div className="form-elements-edit">
                                <div className="left-upload-edit">
                                    <div className="photo-upload">
                                        {/* <div id="preview-photo-container"> */}
                                        <img className="song-photo-preview" src={this.state.photoUrl} />
                                        {/* </div> */}
                                        <p className="label1">Update Artwork:</p>
                                        <input type="file" onChange={this.handlePhotoFile} className="input-buttons" />
                                    </div>
                                </div>
                                <div className="right-upload-edit">
                                    <label >Title <span className="red">*</span>
                                        <br />
                                        <input type="text" onChange={this.update("title")}
                                            value={this.state.title} id="upload-title" />
                                    </label>

                                    <label id="genre-container-edit">Genre <span className="red">*</span>
                                        <br />
                                        <input type="text" onChange={this.update("genre")}
                                            value={this.state.genre} id="genre-edit" />
                                    </label>

                                    <label id="description-container">Description
                                    <br />
                                        <textarea onChange={this.update("description")}
                                            value={this.state.description} id="upload-description" />
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

export default withRouter(EditSong);
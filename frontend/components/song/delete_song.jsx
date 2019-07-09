import React from 'react';
import { withRouter } from 'react-router-dom';

class DeleteSong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deleted: 'false'
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.clearSongErrors();
    }

    componentDidUpdate() {
        debugger 
    }


    handleDelete() {
        this.props.removeSong(this.props.songId)
        this.props.history.push("/discover");
        location.reload(); 
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
                <button id="save" onClick={this.handleDelete}>Delete Forever</button>
            </div>);

        return (
            <div className="delete-container">
                <div className="container-delete-song">
                    <div className="delete-song-box">
                        <div className="upper-delete-box">

                        </div>
                        <div className="lower-delete-box">
                            <p id="delete-song"> Permanently Delete This Track?</p>
                            <p id="delete-song-text"> 
                                Removing this track is irreversible. You will lose all data associated with this track with no way to get it back.
                            </p>
                            <div id="delete-buttons">
                                {loading}
                            </div>
                            <div className="formerrors">
                                {this.renderErrors()}
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DeleteSong);
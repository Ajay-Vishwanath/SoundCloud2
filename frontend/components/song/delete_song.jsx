import React from 'react';

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


    handleDelete() {
        this.props.deleteSong(this.props.songId)
        this.setState({
            deleted: 'true'
        })
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
                <button id="cancel">Cancel</button>
                <button type="submit" id="save" onSubmit={this.handleSubmit}>Save</button>
            </div>);

        return (
            <div className="delete-container">
                <div className="container-delete-song">
                    <div className="delete-song-box">
                            {loading}
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteSong;
import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import withRouter from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        window.scrollTo(0, 0)
    }

    handleUpdate(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];

        debugger 

        if (file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
            const updatedUser={
                id: this.props.user.id,
                photoUrl: reader.result 
            }
            debugger 
            this.props.updateUser(updatedUser).then(this.props.history.push(`/users/${this.props.user.id}`));
        } 
    }}

    render() {

    if (!this.props.user) {
        return null; 
    }

    const photoUrl = (this.props.user.photoUrl === '') ? 
        ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (this.props.user.photoUrl)

    const location = (this.props.user.location === '') ?
        (null) : this.props.user.location 

    const updateImageButton = (this.props.currentUser === this.props.user) ? 
        (<label className="update-image-button"><FontAwesomeIcon icon="camera" />
        Update Image
        <input type="file" onChange={this.handleUpdate} className="update-prof-pic-input"></input>
        </label>) : (null)
    
    return(
        <div className="full-user-show-page">
            <GreetingContainer />
            <div className="full-user-show-container">
                <div className="full-user-show-container-2">
                    <div className="user-banner">
                        <div className="user-banner-contents">
                            <div className="user-banner-left">
                                <div className="profile-photo-container">
                                    <img src={photoUrl} className="profile-photo"/>
                                    {updateImageButton}
                                </div>
                                <div className="user-info">
                                    <span className="username">{this.props.user.username}</span>
                                    <span className="location">{location}</span>
                                </div>
                            </div>
                        </div>
                        <img src={window.skyurl} id="banner-show-image" />
                    </div>
                </div>
            </div>
        </div>
    )}; 
}

export default UserShow 
import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            photoChanged: false,
            photoUrl: this.props.user.photoUrl
        }

        this.handleUpdate = this.handleUpdate.bind(this); 
    }

    componentDidMount() {
        debugger 
        this.props.fetchUser(this.props.match.params.userId);
        window.scrollTo(0, 0)
    }

    handleUpdate(e) {
        const reader = new FileReader(); 
        const file = e.currentTarget.files[0];

        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result});
        } 

        if (file) {
        reader.readAsDataURL(file)
        const formData = new FormData();
        const userId = this.props.user.id || this.props.match.params.id 
        formData.append('user[profile_photo]', file)
        this.props.updateUser({user: formData, id: userId}).then(result => this.setState({photoChanged: !this.state.photoChanged}));
        }
    }

    render() {

    if (!this.props.user) {
        return null; 
    }

    const photoUrl = (this.props.user.photoUrl === '') ? 
        ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (this.state.photoUrl)

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

export default withRouter(UserShow) 
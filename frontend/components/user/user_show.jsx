import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import withRouter from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        window.scrollTo(0, 0)
    }

    render() {

    if (!this.props.user) {
        return null; 
    }

    const photoUrl = (this.props.user.photoUrl === '') ? 
        ('https://soundcloud-2-dev.s3-us-west-1.amazonaws.com/moonassii.jpg') : (this.props.user.photoUrl)

    const location = (this.props.user.location === '') ?
        (null) : this.props.user.location 
    
    return(
        <div className="full-user-show-page">
            <GreetingContainer />
            <div className="full-user-show-container">
                <div className="full-user-show-container-2">
                    <div className="user-banner">
                        <div className="user-banner-contents">
                            <div className="user-banner-left">
                                <img src={photoUrl} className="profile-photo"/>
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
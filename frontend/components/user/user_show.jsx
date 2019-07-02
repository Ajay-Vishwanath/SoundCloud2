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
    return(
        <div className="full-user-show-page">
            <GreetingContainer />
            <div className="full-user-show-container">
                <span>User Show</span>
            </div>
        </div>
    )}; 
}

export default UserShow 
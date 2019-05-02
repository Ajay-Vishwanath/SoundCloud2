import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, signup} from '../../actions/session_actions';

class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDownMenuOne: false,
            dropDownMenuTwo: false 
        }
    }

    toggle(field) {
        return e=> {
            this.setState(
                {[field]: !this.state.field}
            )
        }
    }

    render() {
        const loggedOut = () => {
            return (
                //className={this.props.isSplash? 'transparent-header' : 'normal-header'}
                <header> 
                    <div className='soundcloud2logo'>
                        {/* enter a link to the splash page here  */}
                    </div>
                    <div className='right-navbar'>
                        <button onClick={() => this.props.openModal('login')}>Sign In</button>
                        <button onClick={() => this.props.openModal('signup')}>Create Account</button>
                    </div>
                </header>
            );
        };

        const loggedIn = () => {
            return (
                <header className='normal-header'>
                    <div className='soundcloud2logo'>
                        {/* enter a link to the splash page here  */}
                    </div>
                    <div className='right-navbar'>
                        <div className={this.state.dropDownMenuOne ? 
                        'dropdown-one-show':
                        'dropdown-one-hidden'}>
                            <button onClick={this.props.logout}>Sign Out</button>
                        </div>
                    </div>
                </header>
            );
        };
        
        

    return this.props.currentUser? loggedIn() : loggedOut() 
    };
};

export default Greeting;
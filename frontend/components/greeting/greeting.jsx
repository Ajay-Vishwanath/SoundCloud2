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
                <header className='normal-header'> 
                    <div className='soundcloud2logo'>
                        <img src={window.logourl} id="soundcloud2logo"/>
                        <span>SOUNDCLOUD2  </span>
                            {/* enter a link to the splash page here  */}
                    </div>
                    <div className='rightnavbar'>
                        <div className="loginbuttons"> 
                            <button onClick={() => this.props.openModal('login')} className="loginbutton">Sign In</button>
                            <button onClick={() => this.props.openModal('signup')} className="createaccountbutton">Create Account</button>
                        </div>
                    </div>
                </header>
            );
        };

        const loggedIn = () => {
            return (
                <header className='normal-header'>
                    <div className='soundcloud2logo'>
                        <img src={window.logourl} id="soundcloud2logo"/>
                        {/* enter a link to the splash page here  */}
                    </div>
                    <div className='rightnavbar'>
                        <button className={this.state.dropDownMenuOne ? 
                        'dropdown-one-show':
                        'dropdown-one-hidden'} onClick={this.toggle("dropDownMenuOne")}></button>
                        <div className='dropdowncontent'>
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
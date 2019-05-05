import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, signup} from '../../actions/session_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDownMenuOne: false,
            dropDownMenuTwo: false 
        }

        window.addEventListener('click', (e) => {
            const dropdown = document.getElementById("DropDownTwo")
            if (dropdown.className === ("dropDownShow") && (!(e.target.matches("DropDownTwo") || !(e.target.matches("svg-inline--fa fa-ellipsis-h fa-w-16 fa-lg "))))){
                dropdown.className =  "dropDownShow-hidden"
            }
        });
    }

    togglemenu() {
        let x = document.getElementById("DropDownTwo");
        if (x.className.indexOf("dropDownShow") !== -1) {
            x.className = "dropDownShow";
        }
        else { 
            x.className="dropDownShow-hidden"
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
                <header className='full-header'>
                    <div className='functional-header'>
                        <div className='newsoundcloud2logo'>
                            <img src={window.logo2url} id="soundcloud2logo"/>
                            {/* enter a link to the splash page here  */}
                        </div>
                        

                        <div className='rightnavbar'>
                            <div id="DropDownTwo" className="dropDownShow-hidden" onClick={this.togglemenu}><FontAwesomeIcon icon="ellipsis-h" size="lg" />
                                <ul>
                                    <li className="dropdownitem"> <button onClick={this.props.logout} className="logout-button"> Sign Out</button> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            );
        };
        
        

    return this.props.currentUser? loggedIn() : loggedOut() 
    };
};

export default Greeting;
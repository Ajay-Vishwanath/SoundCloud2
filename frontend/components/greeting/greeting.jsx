import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, signup} from '../../actions/session_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router';


class Greeting extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDownMenuOne: false,
            dropDownMenuTwo: false 
        }

        window.addEventListener('click', (e) => {
            const dropdown = document.getElementById("DropDownTwo");
            if (dropdown.className === ("dropDownShow") && (!(e.target.matches("DropDownTwo") || !(e.target.matches("svg-inline--fa fa-ellipsis-h fa-w-16 fa-lg "))))){
                dropdown.className =  "dropDownShow-hidden"
            }
        });

        this.goHome=this.goHome.bind(this);
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

    goHome() {
        this.props.logout()
        this.props.history.push("/")
    }

    render() {
        const loggedOut = () => {
            return (
                <header className='full-header'>
                    <div className='functional-header'>
                        <div className='newsoundcloud2logo'>
                            <img src={window.logo2url} id="soundcloud2logo" />
                            {/* enter a link to the splash page here  */}
                        </div>


                        <div className='rightnavbar'>
                            <div className="greeting-loginbuttons">
                                <button onClick={() => this.props.openModal('login')} className="splash-loginbutton">Sign In</button>
                                <button onClick={() => this.props.openModal('signup')} className="splash-createaccountbutton">Create account</button>
                            </div>
                        </div>
                    </div>
                </header>
            );
        };

        const loggedIn = () => {
            return (
                <header className='full-header'>
                    <div className='functional-header'>
                        <div className="greeting-left">
                            <div className='newsoundcloud2logo'>
                                <img src={window.logo2url} id="soundcloud2logo"/>
                                {/* enter a link to the splash page here  */}
                            </div>

                            <div className="home-button-div">
                                <a href="/#/discover" className="home-button">Home</a>
                            </div>
                        </div>
                        

                        <div className='rightnavbar'>
                            <div className="upload-button-div">
                                <a href="/#/upload" className="upload-button">Upload</a>
                            </div>

                            <div className="dropdown-container">
                                <div id="DropDownTwo" className="dropDownShow-hidden" onClick={this.togglemenu}><FontAwesomeIcon icon="ellipsis-h" size="lg" />
                                    <ul>
                                        <li className="dropdownitem"> <button onClick={this.goHome} className="logout-button"> Sign Out</button> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            );
        };
        
        

    return this.props.currentUser? loggedIn() : loggedOut() 
    };
};

export default withRouter(Greeting);
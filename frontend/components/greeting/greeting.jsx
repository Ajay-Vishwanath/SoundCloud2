import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout, signup} from '../../actions/session_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router';


class Greeting extends React.Component {

    constructor(props) {
        super(props)

        this.dropDownMenuOne = false
        this.dropDownMenuTwo = false 

        this.goHome=this.goHome.bind(this);
        this.togglemenutwo=this.togglemenutwo.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener("click", this.closeMenu)
    // }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeMenu)
    }

    closeMenu(e) {
        if (this.dropDownMenuTwo === true) {
            this.togglemenutwo(e)
        }
    }

    togglemenutwo(e) {

        let dropdownmenuTwocontainer = document.getElementById("dropdown-container-two")
        let dropdownmenuTwobutton = document.getElementById("DropDownTwo")
        let dropdownmenuTwodropdown = document.getElementById("dropdowntwo-content")

        
        if (dropdownmenuTwobutton.classList.contains("clicked")) {
            dropdownmenuTwocontainer.classList.remove("clicked");
            dropdownmenuTwobutton.classList.remove("clicked");
            dropdownmenuTwodropdown.classList.remove("show");
        }
        else {
            dropdownmenuTwocontainer.classList.add("clicked");
            dropdownmenuTwobutton.classList.add("clicked");
            dropdownmenuTwodropdown.classList.add("show");
        } 

        this.dropDownMenuTwo = (!this.dropDownMenuTwo)
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
                            <a href="/#/"><img src={window.logo2url} id="soundcloud2logo" /></a>
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
                                <a href="/#/discover" className="home-button"><img src={window.logo2url} id="soundcloud2logo" /></a>
                            </div>

                            <div className="home-button-div">
                                <a href="/#/discover" className="home-button">Home</a>
                            </div>
                        </div>
                        

                        <div className='rightnavbar'>
                            <div className="upload-button-div">
                                <a href="/#/upload" className="upload-button">Upload</a>
                            </div>

                            <div className="dropdown-container-two" id="dropdown-container-two">
                                <button id="DropDownTwo" className="dropDownTwoContent" onClick={this.togglemenutwo}>
                                <FontAwesomeIcon icon="ellipsis-h" size="lg" className="fontawesomemenuicon"/></button> 
                                <div className="dropdowntwo-content" id="dropdowntwo-content">
                                    <button onClick={this.goHome} className="logout-button" id="buttontwo"> Sign Out</button> 
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
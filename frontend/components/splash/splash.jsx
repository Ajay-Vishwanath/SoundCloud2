import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Splash extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
    
        const splashLoggedIn = () => {
            return(
            <>
            <GreetingContainer/> 
            <div id="test">
            </div>
            </>
            )

        };

        const splashLoggedOut = () => {
            return(
            <div className="container-splash">
                <div className="splash-background">
                    <div className="splash-banner">
                        <header className='splash-header'>
                            <div className='splash-soundcloud2logo-box'>
                                <div>
                                    <img src={window.logourl} id="splash-soundcloud2logo" />
                                </div>
                                <div>
                                    <span id="logotext">SOUNDCLOUD2</span>
                                </div>
                                {/* enter a link to the splash page here  */}
                            </div>
                            <div className="splash-loginbuttons">
                                <button onClick={() => this.props.openModal('login')} className="splash-loginbutton">Sign In</button>
                                <button onClick={() => this.props.openModal('signup')} className="splash-createaccountbutton">Create Account</button>
                            </div>
                        </header>

                        <div className="splash-background-text">
                            <h1>Discover more music with SoundCloud2</h1>
                            <p>SoundCloud2 lets you discover and listen to new music in a nice, clean interface.</p>
                            <div className="demobutton">
                                <button id="demo-login" onClick={() => this.props.openModal('login')}>Demo Login</button>
                            </div>
                        </div>

                        <img src={window.idkurl} id="splash-image" /> 
                    </div>
                </div>
            </div>
            )
        };

        return(

            this.props.currentUser ? 
            splashLoggedIn() :
            splashLoggedOut()
        )

    };
};

export default Splash; 
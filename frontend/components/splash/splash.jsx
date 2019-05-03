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
            <GreetingContainer/> 
            )
        };

        const splashLoggedOut = () => {
            return(
            <div className="container-splash">
                <div className="splash-background">
                    <header className='splash-normal-header'>
                        <div className='soundcloud2logo'>
                            <img src={window.logourl} id="splash-soundcloud2logo" />
                            <span>SOUNDCLOUD2  </span>
                            {/* enter a link to the splash page here  */}
                        </div>
                        <div className='splash-rightnavbar'>
                            <div className="splash-loginbuttons">
                                <button onClick={() => this.props.openModal('login')} className="splash-loginbutton">Sign In</button>
                                <button onClick={() => this.props.openModal('signup')} className="splash-createaccountbutton">Create Account</button>
                            </div>
                        </div>
                    </header>

                    <div className="splash-background-text">
                        <h1>Discover more music with SoundCloud2</h1>
                        <span>
                            SoundCloud2 lets you discover and listen to new music in a nice, clean interface.
                        </span>
                        <button id="Demo Login">Demo Login</button>
                    </div>

                    <img src={window.idkurl} id="splash-image" />
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
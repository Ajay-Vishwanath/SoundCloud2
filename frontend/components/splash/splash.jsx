import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SongIndexItem from '../../components/song/index_song_item';

class Splash extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        const selects = [8, 10, 11, 12, 15, 20, 21, 22]
        const select_array = this.props.songs.filter(song => {
            return (selects.includes(song.id))
        });

        const songs = select_array.map(song => {
            return <SongIndexItem key={song.id} song={song} player={this.props.player}
                receivePlayerSong={this.props.receivePlayerSong} currentSong={this.props.currentSong}/>
        });

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
            <div>
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
                                <button onClick={() => this.props.openModal('signup')} className="splash-createaccountbutton">Create account</button>
                            </div>
                        </header>

                        <div className="splash-background-text">
                            <h1>Discover more music with SoundCloud2</h1>
                            <p>SoundCloud2 lets you discover and listen to new music with a nice, simple, and easy-to-use interface.</p>
                            <div className="demobutton">
                                <button id="demo-login" onClick={() => this.props.openModal('login')}>Demo Login</button>
                            </div>
                        </div>

                        <img src={window.idk2url} id="splash-image" /> 
                    </div>
                    <div>
                        <div className="frontContent">
                            <h2 className="frontIndex-Header">Hear what's trending for free in the SoundCloud2 community</h2>
                            <div className="full-song-inde-splash">
                                <ul className="full-song-list-splash">
                                    {songs}
                                </ul>
                            </div>
                        </div> 
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
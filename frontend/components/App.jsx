import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal'; 
import UpdateModal from './modal/update_modal';
import DeleteModal from './modal/delete_modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faCircleNotch, faPlay, faPause, faPencilAlt, faTrash, faStepBackward, faStepForward, faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import UploadSongContainer from './song/upload_song_container'
import SongIndexContainer from './song/index_song_container';
import SongShowContainer from './song/song_show_container';
import Playbar from './audio_player/player_container';

library.add(faEllipsisH, faCircleNotch, faPlay, faPencilAlt, faTrash, faPause, faStepBackward, faStepForward, faVolumeUp)

const App = () => (
    <div className="full-page">
        <Modal />
        <UpdateModal />
        <DeleteModal />
    <main className="main">
        <Switch> 
            <ProtectedRoute exact path='/upload' component={UploadSongContainer} />
            <ProtectedRoute exact path='/discover' component={SongIndexContainer} />
            <Route exact path="/songs/:songId" component={SongShowContainer} />
            <AuthRoute exact path='/' component={SplashContainer} />
            <Redirect to="/"/> 
        </Switch>
    </main>
    <Playbar /> 
    </div>
);

export default App;
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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {UploadSongContainer} from './song/upload_song_container'

library.add(faEllipsisH)

const App = () => (
    <div>
        <Modal />
        {/* <GreetingContainer /> */}
    <main>
        <Switch> 
            <AuthRoute exact path='/' component={SplashContainer}/>
            <ProtectedRoute exact path='/upload' component={UploadSongContainer} />
            {/* <Redirect to="/"/>  */}
        </Switch>
    </main>
    </div>
);

export default App;
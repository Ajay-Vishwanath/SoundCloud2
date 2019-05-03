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

const App = () => (
    <div>
        <Modal />
        {/* <GreetingContainer /> */}
    <main>
        <Switch> 
            <AuthRoute exact path='/' component={SplashContainer}/>
        </Switch>
    </main>
    </div>
);

export default App;
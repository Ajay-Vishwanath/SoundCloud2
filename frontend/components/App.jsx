import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>
    <main>
        <h1>SoundCloud2</h1>
    </main>
    </div>
);

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import {configureStore} from './store/store';

const store = configureStore();
window.SessionApiUtil = SessionApiUtil;
window.getState = store.getState;

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to SoundCloud2</h1>, root);
});


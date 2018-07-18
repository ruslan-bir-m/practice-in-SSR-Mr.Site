import React from 'react';
import App from './App';
import store from '../store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function Root(props) {
    return (
        <BrowserRouter>
            <Provider store = {store}>
                <App {...props} />
            </Provider>
        </BrowserRouter>
    )
}

export default Root;
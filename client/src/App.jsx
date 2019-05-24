import React from 'react';
import './app.scss';
import * as Apis from './api/label';

Apis.getLabelList().then(res => {
    console.log(res);
})

const App = () => {
    return (
        <div className="app-container">
            <h1>hello world</h1>
        </div>
    )
}

export default App;
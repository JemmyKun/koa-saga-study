import React from 'react';
import './app.scss';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import Label from './pages/Label/Label';
import Comment from './pages/Comment/Comment';

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo">koa-saga-app</div>
                <div className="link-box">
                    <NavLink to={'/label'} className="link-item">{'Label'}</NavLink>
                    <NavLink to={'/comment'} className="link-item">{'Comment'}</NavLink >
                </div>
            </header>
            <div className="app-content">
                <Switch>
                    <Route path='/' exact component={Label} />
                    <Route path='/label' exact component={Label} />
                    <Route path='/comment' exact component={Comment} />
                    <Redirect to='/label' />
                </Switch>
            </div>
        </div>
    )
}

export default App;
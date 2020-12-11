import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/OrganizationPage';
import SignupPage from './pages/SignupPage';

import './App.scss';

export default function ThePlatformWebsite( props:{} ){



    return (            
            <BrowserRouter>
                <Switch>
                    <Route path="/organization" component={Organization} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
    );

}
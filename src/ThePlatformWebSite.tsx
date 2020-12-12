import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/Organization/OrganizationPage';

import './App.scss';

export default function ThePlatformWebsite( props:{} ){



    return (            
            <BrowserRouter>
                <Switch>
                    <Route path="/organization" component={Organization} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
    );

}
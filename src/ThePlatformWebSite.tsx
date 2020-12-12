import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/Organization/OrganizationPage';
import Series from './pages/SeriesPage';
import Profile from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import {createNewArticle} from './components/ArticleList/ArticleInput/CreateArticle';
import IndividualArticle from './components/ArticleList/IndividualArticle';

import './App.scss';

export default function ThePlatformWebsite( props:{} ){



    return (            
            <BrowserRouter>
                <Switch>
                    <Route path="/organization" component={Organization} />
                    <Route path="/series" component={Series} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/organization" component={Organization} />
                    <Route path="/articles" component={Article} />
                    <Route path="/newArticle" component={createNewArticle} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
    );

}

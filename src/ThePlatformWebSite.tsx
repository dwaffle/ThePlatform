import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/Organization/OrganizationPage';
import SignupPage from './pages/SignupPage';
import {createNewArticle} from './components/ArticleList/ArticleInput/CreateArticle';
import Article from './components/ArticleList/HorizontalArticleList'

import './App.scss';

export default function ThePlatformWebsite( props:{} ){



    return (            
            <BrowserRouter>
                <Switch>
                    <Route path="/organization" component={Organization} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/articles" component={Article} />
                    <Route path="/newArticle" component={createNewArticle} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
    );

}

//<Route path="/articles" component={createNewArticle} />
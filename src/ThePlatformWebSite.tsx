import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Organization from './pages/Organization/OrganizationPage';
import Series from './pages/SeriesPage';
import Profile from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import {CreateNewArticle} from './components/ArticleList/ArticleInput/CreateArticle';
// import IndividualArticle from './components/ArticleList/IndividualArticle';
import Article from './components/ArticleList/HorizontalArticleList';
import LoginPage from './pages/LoginPage'

import './App.scss';
// import EditorPage from './components/EditorPage/EditorPage';


export default function ThePlatformWebsite( props:{} ){


    const requireAuth = () => {
        if(!localStorage.getItem('token')) {
           return <Route path="/login" />
        }
        return <Route path="/" component={HomePage} />
    }

    return (            
            <BrowserRouter>
                <Switch>
                    <Route path="/organization" component={Organization} />
                    <Route path="/series" component={Series} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/organization" component={Organization} />
                    <Route path="/articles" component={Article} />
                    <Route path="/editor" component={LoginPage} />

                    <Route path="/newArticle" component={CreateNewArticle} />
                    {/* <Route path="/" component={requireAuth}/> */}
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
    );

}

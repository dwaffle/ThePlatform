import React from 'react';
import MainLayout from '../src/layouts/MainLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './components/pages/signup'
import './App.scss';



export default function ThePlatform( props:{} ){
    //EIther path="/" needs to be exact, or it needs to come last.
    return (
        <div>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/" exact component={MainLayout} />
                    
                </Switch>
            </BrowserRouter>
        </div>
    );

}

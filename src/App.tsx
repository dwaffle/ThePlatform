import React from 'react';
import MainLayout from '../src/layouts/MainLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage'
import './App.scss';



export default function ThePlatform( props:{} ){
    //Either path="/" needs to be exact, or it needs to come last.  I've changed it to exact for now.
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

import React from 'react';
import HomePage from './components/pages/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './components/pages/signup'
import './App.scss';



export default function ThePlatform( props:{} ){
    //Either path="/" needs to be exact, or it needs to come last.  I've changed it to exact for now.
    return (
        <div>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/" exact component={HomePage} />
                    
                </Switch>
            </BrowserRouter>
        </div>
    );

}

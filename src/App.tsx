import React from 'react';
import HomePage from './components/pages/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';



export default function ThePlatform( props:{} ){
    
    return (
        <div>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );

}

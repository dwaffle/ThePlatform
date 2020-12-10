import React from 'react';
import MainLayout from '../src/layouts/MainLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';



export default function ThePlatform( props:{} ){
    
    return (
        <div>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/" component={MainLayout} />
                </Switch>
            </BrowserRouter>
        </div>
    );

}

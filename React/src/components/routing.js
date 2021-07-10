import React from 'react';
import {  Route, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Header from './header';
import Login from '../Login';


const Routing = () =>{
    return(
        <React.Fragment>
            <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            </BrowserRouter>
        </React.Fragment>
    
    )
}
export default Routing;
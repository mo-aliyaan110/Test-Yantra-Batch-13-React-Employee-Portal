import React from 'react';
import {  Route, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
// import Header from './header';
import Login from '../Login';
import HomeLogin from '../HomeLogin';
import Employeedetails from '../Employeedetails';
import Employeelist from '../Employeelist';


const Routing = () =>{
    return(
        
        <React.Fragment>
            <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/HomeLogin' component={HomeLogin}></Route>
            <Route exact path='/employeedetails' component={Employeedetails}></Route>
            <Route exact path='/employeelist' component={Employeelist}></Route>
            </BrowserRouter>
        </React.Fragment>
    
    )
}
export default Routing;
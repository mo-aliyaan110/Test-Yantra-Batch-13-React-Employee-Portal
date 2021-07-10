import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Header from './components/header';

 
class Login extends Component {

    render() {
        
        return (
            <div>
                <Header></Header>
                <Link to="/HomeLogin"> <button  className='m-5  btn btn-primary'> Login </button> </Link>
            </div>
        )
    }
}

export default Login

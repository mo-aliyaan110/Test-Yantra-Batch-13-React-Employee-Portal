import React from 'react';
import ReactDom from 'react-dom';
import Routing from './components/routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () =>{
    return(
        <React.Fragment>
            <Routing/>
        </React.Fragment>
    )
}
ReactDom.render(<App/>, document.getElementById('root'));
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Employeelist extends Component {
    render() {
        return (
            <div>
                 {/* Header Starts */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/HomeLogin">Employee Portal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/HomeLogin">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Employee List</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/employeedetails">Employee Details</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                        </li>
                        
                    
                    </ul>
                    </div>
                </div>
            </nav>
            {/* Header Ends */}
                <h1>Employee List</h1>
                
                <table className="table" style={{textAlign:'center'}} >
                    <thead>
                        <tr style={{borderBottom:"4px solid black"}}>
                        <th scope="col" style={{borderRight:"2px solid black"}} >Employee ID</th>
                        <th scope="col" style={{borderRight:"2px solid black"}}>Name</th>
                        <th scope="col"style={{borderRight:"2px solid black"}}>Designation</th>
                        <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">TY001</th>
                        <td className='bg-light' >Arun</td>
                        <td >SSD</td>
                        <td className='bg-light'>45000</td>
                        </tr>
                        <tr>
                        <th scope="row">TY002</th>
                        <td  className='bg-light'>Prashant</td>
                        <td>HR</td>
                        <td className='bg-light'>25000</td>
                        </tr>
                        <tr>
                        <th scope="row">TY003</th>
                        <td className='bg-light'>Vijay</td>
                        <td>SSD</td>
                        <td className='bg-light'>50000</td>
                        </tr>
                        <tr   style={{borderBottom:"4px solid black"}}>
                        <th scope="row">TY004</th>
                        <td className='bg-light'>Kiran</td>
                        <td>HR</td>
                        <td className='bg-light'>30000</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Employeelist

import React from 'react';

import img10 from './styles/img/emp6.png';
import img3 from './styles/img/emp10.jpeg';
import img5 from './styles/img/emp9.jpeg';
import img2 from './styles/img/emp11.jpeg';
import img4 from './styles/img/emp7.png';
import img6 from './styles/img/emp8.png';
import img7 from './styles/img/emp12.png';
import img8 from './styles/img/emp13.png';
import img9 from './styles/img/emp14.jpg';
// import img11 from './styles/img/emp16.png';
// import img12 from './styles/img/emp17.png';

import  { Link } from 'react-router-dom';

import './styles/employeedetails.css';
// import { left } from '@popperjs/core';

function Employeedetails() {
    return (
        <div>
        
            {/* Header Starts */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/HomeLogin">Employee Portal</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/HomeLogin">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/employeelist">Employee List</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/employeedetails">Employee Details</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/">Logout</Link>
                        </li>
                        
                    
                    </ul>
                    </div>
                </div>
            </nav>
            {/* Header Ends */}
            <div style={{backgroundColor:"#f8f9fa"}}>
            <div className='container'>
                <div className="d-flex" style={{marginLeft:"100px"}}>
                            <div className='col-md-4 mt-5 box-shadow' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card " style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img10}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >David</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img3}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Jack</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img2}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Robert</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>
                </div>


                <div className="d-flex" style={{marginLeft:"100px"}}>
                <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img4}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Issac</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img5}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Mary</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img6}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Jenny</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>
                </div>


                <div className="d-flex" style={{marginLeft:"100px", marginBottom:"30px"}}>
                <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img7}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Linda</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img8}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Saasha</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img9}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Victoria</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Employeedetails;

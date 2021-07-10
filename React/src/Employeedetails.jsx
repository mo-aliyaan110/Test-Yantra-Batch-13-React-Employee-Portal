import React from 'react';
import img from './styles/img/Ali.PNG';
import  { Link } from 'react-router-dom';

import './styles/employeedetails.css';
// import { left } from '@popperjs/core';

function Employeedetails() {
    return (
        <div>
        
            {/* Header Starts */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Employee Portal</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="#">Employee List</Link>
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
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>
                </div>


                <div className="d-flex" style={{marginLeft:"100px"}}>
                <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>
                </div>


                <div className="d-flex" style={{marginLeft:"100px", marginBottom:"30px"}}>
                <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
                                <p className="card-text" style={{textAlign:'center',backgroundColor:"white"}}> Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <button className='btn btn-success mybtn' style={{marginLeft:"105px"}} > +  </button>
                                
                                </div>
                                </div>
                                
                            </div>

                            <div className='col-md-4 mt-5' style={{display:"flex" ,justifyContent:"space-between"}}>
                                <div className="card" style={{width: "18rem", backgroundColor:"white"}}>
                                <img className=' myimg mt-5' src={img}  alt="Hey"/>
                                <div className="card-body" style={{backgroundColor:"white"}}>
                                <h5 className="card-title" style={{textAlign:'center', backgroundColor:"white"}} >Aliyaan</h5>
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

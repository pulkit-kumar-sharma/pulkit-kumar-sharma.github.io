import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { BsLaptop } from 'react-icons/bs';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/SpringReactAppMainScreen.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Spring React App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/pulkit-kumar-sharma/SpringBoot-React-Starter-Project" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="/blank"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/SetupPostgresDBLocallyBanner.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Local Postgres Docker Setup</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/pulkit-kumar-sharma/LocalPostgresDockerSetup" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="/blank"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/LoveCalculator-1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/LoveCalculator-2.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/LoveCalculator-3.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/LoveCalculator-4.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Love Calculator</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://pulkit-kumar-sharma.github.io/LoveCalculator/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="/blank"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/pulkit-kumar-sharma/LoveCalculator/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="/blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork
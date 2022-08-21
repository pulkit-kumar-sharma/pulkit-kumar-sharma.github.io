import React, { Fragment } from 'react'
import { SiInstagram, SiHackerrank, SiTwitter } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">PULKIT KUMAR SHARMA</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Senior Software Engineer</h4>
                                <h6 className="blue-label px-2 py-1">August 2021 - Present</h6>
                                <p className="m-0">Optum Global Solutions (United Health Group)</p>
                                <p>Bangalore, Karnataka, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Software Engineer</h4>
                                <h6 className="blue-label px-2 py-1">July 2019 - July 2021</h6>
                                <p className="m-0">Optum Global Solutions (United Health Group)</p>
                                <p>Bangalore, Karnataka, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">TREES (Training And Research In Earth’s Eco-System) Trainee</h4>
                                <h6 className="blue-label px-2 py-1">June 2018 - July 2018</h6>
                                <p className="m-0">Space Applications Center (ISRO)</p>
                                <p>Ahmedabad, Gujarat, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Bachelor of Technology - Computer Science And Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2015 - 2019</h6>
                                <p className="m-0">Indian Institute of Technology Mandi</p>
                                <p>CGPA: 7.64</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.instagram.com/__pulkit.sharma__/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiInstagram className="zoom-on-hover"/>
                            </a> 
                            <a href="https://twitter.com/PulkitS71" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiTwitter className="zoom-on-hover"/>
                            </a>
                            <a href="https://www.hackerrank.com/pulkits1998" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume
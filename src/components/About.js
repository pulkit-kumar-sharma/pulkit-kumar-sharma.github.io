import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Software Engineer with experience in designing and developing enterprise-grade strategic products and micro-services at scale.  <br></br>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                The technology I've worked on : <span className="text-red ls-2">OOP, RDBMS (MYSQL, PostgreSQL), Microservices (Spring Boot), Centralized Logging (Elasticsearch, Kibana, Logstash, Filebeat), SCM (Git, Github), CI/CD (Jenkins), Containerization (Docker), Container Orchestration (Kubernetes, Helm), Big Data (Apache Spark, Apache Kafka), Cloud (Microsoft Azure, Terraform)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About
import React, { Fragment } from "react";
import "./Portfolio.css";
import '../Header/node_modules/bootstrap/dist/css/bootstrap.min.css';
import projects from "../../utils/projects.json";

function Portfolio() {
    return (
        <Fragment>
            <section className="projects-section bg-light" id="projects">
                <div className="container">
                    <h1 className="display-3 sectionHeader">Projects</h1>
{projects.map(project =>)}
                    <div classNameName="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div classNameName="col-xl-8 col-lg-7">
                            <a href="https://joeluca24.github.io/day-planner-js">
                                <img className="img-fluid mb-3 mb-lg-0 clickableImages" src="assets/gifs/day planner.gif" alt="" />
                            </a>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <a href="https://github.com/joeluca24/day-planner-js"></a>
                                <p className="text-black-50 mb-0">Day Planner is a fully functional app that lets you pan out your
                                entire day with ease and javascript.
                        </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6"><a href="https://joeluca24.github.io/javascript-password-generator"><img
                            className="clickableImages img-fluid " src="assets/gifs/password generator.gif" alt="password generator screenshot" /></a></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white"></h4><a
                                            href="https://github.com/joeluca24/javascript-password-generator">Password
                                    Generator</a>
                                        <p className="mb-0 text-white-50">Password generator is an applicaton that uses javascript
                                        to genarate
                                    a random password from 8-125 chracters..</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6"><a href="https://thawing-ridge-29544.herokuapp.com/notes"><img
                            className=" clickableImages img-fluid" src="assets/gifs/note taker.gif" alt="" /></a></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white"><a href="https://github.com/joeluca24/express-note-taker">Note
                                        Taker</a></h4>
                                        <p className="mb-0 text-white-50">Note Taker is an app that lets you take a list of notes
                                        and also let the user save them in the data base table.
                                </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7"><a href="https://nlamonaco86.github.io/Virtual_Art_Gallery"><img
                            className=" clickableImages img-fluid mb-3 mb-lg-0" src="assets/gifs/project 1.gif" alt="" />
                        </a></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4><a href="https://github.com/nlamonaco86/Virtual_Art_Gallery/tree/master">Virtual Art Gallery
                        </a></h4>
                                <p className="text-black-50 mb-0">Virtual art gallery is an application that was
                                a team developed application in which the user can search for diffrent generated magic cards
                                from
                            an api that holds every magic card art illustration</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6"><a href="https://joeluca24.github.io/readme-generator"><img
                            className=" clickableImages  img-fluid" src="assets/gifs/readme gen.gif" alt="" /></a></div>
                            <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white"><a href="https://github.com/joeluca24/readme-generator">Readme
                                        Generator</a></h4>
                                        <p className="mb-0 text-white-50">Readme Generator is an application that
                                    generates readmes it creates a file based on user input.</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6"><a
                            href="https://github.com/joeluca24/Team-Template-Engine/blob/master/showing%20app.gif"><img
                                className=" clickableImages  img-fluid" src="assets/gifs/team temp gengif.gif" alt="" /></a></div>
            
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white"><a
                                            href="https://github.com/joeluca24/Team-Template-Engine">Template generator </a></h4>
                               
                                        <p className="mb-0 text-white-50">Team Template generator uses nodejs to
                                        create an html file that can display the user inputed team.
                                </p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
} export default Portfolio;

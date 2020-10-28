import React, { Fragment } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    < Fragment>
      <header className="masthead">
        <div  className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Joe Luca </h1>
            <h2 className="text-black-50 mx-auto mt-2 mb-5">Aspiring Web Developer.</h2>
            <a className="btn btn-primary js-scroll-trigger" href="#about">About</a>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
export default Home;
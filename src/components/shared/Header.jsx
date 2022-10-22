import React, { Component, useEffect,useRef } from "react";

import { Link } from "react-scroll";
import { Nav, NavItem } from 'react-bootstrap';


function Header() {

  return (
    <header className="main_nav">
      <div className="container">
        <nav
          id="navbar-example2"
          className="navbar navbar-expand-lg navbar-light w-100"
        >
          <Link className="navbar-brand" to="top" smooth={true} duration={500}>
            <img className="nav-logo" src="images/logo/1.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current='page'
                  spy='true'
                  to="top"
                  smooth={true}
                  duration={3000}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current='page'
                  spy='true'
                  to="about"
                  smooth={true}
                  duration={3000}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current='page'
                  spy='true'
                  to="skill"
                  smooth={true}
                  duration={3000}
                >
                  Skill
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy='true'
                  to="services"
                  smooth={true}
                  duration={3000}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy='true'
                  to="portfolio"
                  smooth={true}
                  duration={3000}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy='true'
                  to="testimonial"
                  smooth={true}
                  duration={3000}
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy='true'
                  to="blog"
                  smooth={true}
                  duration={3000}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy='true'
                  to="contact"
                  smooth={true}
                  duration={3000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/svg/logo.svg";

const TheFirmNav = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section className="thefirm-nav py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="d-flex align-items-center gap-5">
            <ul
              className={
                nav
                  ? "nav-hidden d-flex align-items-center justify-content-lg-end gap-4 py-2 mb-0"
                  : "nav-open p-0 gap-4"
              }
            >
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  Solution
                </a>
              </li>
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  Cases
                </a>
              </li>
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="px-lg-1 px-xxl-0">
                <a
                  className="ff-nunito fw-bold fs-xsm color-black position-relative"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <button className="btn-yellow fw-bold mx-auto mx-lg-0 d-md-none">
                Get in Touch
              </button>
            </ul>
            <button className="btn-yellow fw-bold mx-auto mx-lg-0 d-none d-md-block">
              Get in Touch
            </button>
            <div className="text-end d-xl-none">
              <button
                className={nav === true ? "hamburger" : "hamburger-2"}
                onClick={() => setnav(!nav)}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TheFirmNav;

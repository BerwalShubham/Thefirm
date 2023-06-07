import React from "react";
import { Container } from "react-bootstrap";
import windows from "../assets/svg/windows.svg";
import google from "../assets/svg/google.svg";
import firefox from "../assets/svg/firefox.svg";
import safari from "../assets/svg/safari.svg";
import Slider from "react-slick";

const OurPartners = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="py-5 sec-our-partner">
      <Container>
        <h2 className="text-center ff-nunito fw-black fs-lg">
          Our <span className="position-relative text-partner"> Partner</span>
        </h2>
        <Slider className="ps-x mt-5" {...settings}>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img
                className="logos windows-logo"
                src={windows}
                alt="WindowsLogo"
              />
            </div>
          </div>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img className="logos" src={google} alt="WindowsLogo" />
            </div>
          </div>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img className="logos" src={firefox} alt="firefoxlogo" />
            </div>
          </div>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img className="logos" src={safari} alt="safarilogo" />
            </div>
          </div>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img className="logos" src={firefox} alt="firefoxlogo" />
            </div>
          </div>
          <div className="ms-sm-2 px-4">
            <div className="logos-bg d-flex align-items-center justify-content-center">
              <img className="logos" src={safari} alt="safarilogo" />
            </div>
          </div>
        </Slider>
        <div className="d-flex gap-5"></div>
      </Container>
    </section>
  );
};

export default OurPartners;

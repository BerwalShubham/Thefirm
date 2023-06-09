import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import research from "../assets/png/OurResearchIMg.png";
import prevarrow from "../assets/svg/prevarrow.svg";
import nextarrow from "../assets/svg/nextarrow.svg";
import brandimg from "../assets/png/brandimg.png";

const OurReasearch = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
          speed: 1000,
          autoplay: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-5 sec-our-research">
      <Container className="position-relative">
        <h2 className="ff-nunito fw-black fs-lg text-center">
          Our Research & Case
          <span className="position-relative text-studies"> Studies</span>
        </h2>
        <div className="px-lg-5 mx-xxl-5">
          <p className="ff-lora fs-xsm text-center px-xxl-5 mx-lg-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <Slider {...settings} className="mt-5 pt-lg-5">
          <div className="row align-items-center text-center text-lg-start flex-column-reverse flex-xl-row research px-md-5 ms-lg-1">
            <div className="col-xl-6">
              <h3 className="ff-nunito fw-bold fs-md">Lorem Ipsum is simply</h3>
              <p className="ff-lora fs-xsm pt-2 pe-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took.
              </p>
              <button className="btn-yellow ff-nunito fw-bold fs-xsm mt-4">
                Read More
              </button>
            </div>
            <div className="col-xl-6 position-relative">
              <div className="research-img-bg p-2">
                <img className="w-100" src={research} alt="A boy and Girl" />
              </div>
              <div className="sec-our-research-yellow-cicle d-none d-xl-block"></div>
            </div>
          </div>
          <div className="row align-items-center text-center text-lg-start research flex-column-reverse flex-xl-row align-items-center px-lg-5 ms-1">
            <div className="col-xl-6">
              <h3 className="ff-nunito fw-bold fs-md">Lorem Ipsum is simply</h3>
              <p className="ff-lora fs-xsm pt-2 pe-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ext ever since the 1500s, when an unknown printer took.
              </p>
              <button className="btn-yellow ff-nunito fw-bold fs-xsm mt-4">
                Read More
              </button>
            </div>
            <div className="col-xl-6">
              <div className="research-img-bg p-2">
                <img className="w-100" src={brandimg} alt="A boy and Girl" />
              </div>
            </div>
          </div>
        </Slider>
        <div className="d-lg-flex align-items-center arrows-bg p-1 d-none">
          <div className="prev-arrow-bg d-flex align-items-center justify-content-center">
            <img src={prevarrow} alt="arrow" />
          </div>
          <div className="next-arrow-bg d-flex align-items-center justify-content-center">
            <img src={nextarrow} alt="arrow" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurReasearch;

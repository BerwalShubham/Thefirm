import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import profile1 from "../assets/svg/profilepic1.svg";
import profile2 from "../assets/svg/profilepic2.svg";
import profile3 from "../assets/svg/profilepic3.svg";
import profile4 from "../assets/svg/profilepic4.svg";
import profile5 from "../assets/svg/profilepic5.svg";
import profilebg from "../assets/svg/profilepicbg.svg";
import doublecomma from "../assets/svg/doublecomas.svg";

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          speed: 500,
        },
      },
    ],
  };
  return (
    <section className="py-5 sec-testimonial">
      <div className="cstm-container">
        <h2 className="ff-nunito fs-lg fw-black text-center">
          Our
          <span className="position-relative text-testimonials ms-3">
            Testimonials
          </span>
        </h2>
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div className="testimonial-yellow-circle d-flex align-items-center justify-content-center d-sm-none">
            <div className="testimonial-yellow-circle-2 d-flex align-items-center justify-content-center">
              <img
                className="mx-auto image profile"
                src={profile1}
                alt="profile"
              />
            </div>
          </div>
          <div className="testimonial-yellow-circle d-flex align-items-center justify-content-center d-sm-none">
            <div className="testimonial-yellow-circle-2 d-flex align-items-center justify-content-center">
              <img
                className="mx-auto image profile"
                src={profile2}
                alt="profile"
              />
            </div>
          </div>
          <div className="testimonial-yellow-circle d-flex align-items-center justify-content-center d-sm-none">
            <div className="testimonial-yellow-circle-2 d-flex align-items-center justify-content-center">
              <img
                className="mx-auto image profile"
                src={profile3}
                alt="profile"
              />
            </div>
          </div>
          <div className="testimonial-yellow-circle d-flex align-items-center justify-content-center d-sm-none">
            <div className="testimonial-yellow-circle-2 d-flex align-items-center justify-content-center">
              <img
                className="mx-auto image profile"
                src={profile4}
                alt="profile"
              />
            </div>
          </div>
          <div className="testimonial-yellow-circle d-flex align-items-center justify-content-center d-sm-none">
            <div className="testimonial-yellow-circle-2 d-flex align-items-center justify-content-center">
              <img
                className="mx-auto image profile"
                src={profile5}
                alt="profile"
              />
            </div>
          </div>
        </Slider>
        <Slider
          className="d-none d-sm-flex"
          {...settings}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img className="mx-auto profile" src={profile1} alt="profile" />
          </div>
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img
              className="mx-auto image profile"
              src={profile2}
              alt="profile"
            />
          </div>
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img
              className="mx-auto image profile"
              src={profile3}
              alt="profile"
            />
          </div>
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img
              className="mx-auto image profile"
              src={profile4}
              alt="profile"
            />
          </div>
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img
              className="mx-auto image profile"
              src={profile5}
              alt="profile"
            />
          </div>
          <div className="py-2 position-relative d-none d-sm-block">
            <img className="profilebg" src={profilebg} alt="profile" />
            <img className="doublecomma" src={doublecomma} alt="" />
            <img
              className="mx-auto image profile"
              src={profile4}
              alt="profile"
            />
          </div>
        </Slider>
        <Slider
          className="text-center"
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={1}
          speed={500}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          dots={true}
          fade={true}
          responsive={[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                speed: 500,
                infinite: true,
                dots: false,
                autoplay: false,
              },
            },
          ]}
        >
          <div className="our-testimonial-para">
            <p className="text-center text-start pe-sm-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-sm-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
          <div className="our-testimonial-para">
            <p className="text-center text-start p-sme-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
          <div className="our-testimonial-para">
            <p className="text-center pe-sm-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
          <div className="our-testimonial-para">
            <p className="text-center pe-sm-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
          <div className="our-testimonial-para">
            <p className="text-center pe-sm-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
          <div className="our-testimonial-para">
            <p className="text-center pe-sm-5 pe-lg-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </p>
            <div>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p className="mb-0 ff-nunito fw-bold fs-xsm">Jenny Wilson</p>
                <div className="vr-line ms-2"></div>
                <p className="mb-0 ff-lora ps-2 fs-xsm">Digital Agency</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

import React from "react";
import { Container, Row } from "react-bootstrap";
import cards from "./js/blogcards";
import clockhand from "../assets/svg/clock-hand.svg";

const OurBlogs = () => {
  return (
    <section className="py-5 bg-grey sec-our-blog position-relative">
      <Container>
        <h2 className="text-center ff-nunito fs-lg fw-black">
          Our <span className="text-blogs position-relative"> Blogs</span>
        </h2>
        <Row className="justify-content-center mt-3">
          {cards.map((val, id) => {
            return (
              <div key={id} className="col-xl-4 col-md-6">
                <div className="our-blogs-cards p-2 mt-3 mx-auto">
                  <img className="w-100" src={val.img} alt="people-gatherd" />
                  <div className="px-2 mt-3">
                    <h4 className="ff-nunito fw-bold fs-sm">{val.heading}</h4>
                    <p className="ff-lora fs-xxsm">{val.para}</p>
                    <div className="hr-line"></div>
                    <div className="d-flex align-items-center justify-content-between mt-3 px-2">
                      <div className="d-flex align-items-center">
                        <img
                          className="alex-img"
                          src={val.alex}
                          alt="AlexLiones"
                        />
                        <p className="mb-0 ff-nunito ps-1 fs-xxsm">
                          {val.name}
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div className="watch-circle d-flex align-items-center justify-content-center">
                          <img
                            className="clock-hands"
                            src={clockhand}
                            alt="clockhand"
                          />
                        </div>
                        <p className="mb-0 color-grey-3 ff-nunito fs-10">
                          {val.date_time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="btn-read-more ff-nunito fs-xsm fw-bold">
                      {val.btn}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
        <div className="text-center">
          <button className="btn-yellow mt-5 ff-nunito fw-bold fs-xsm">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default OurBlogs;

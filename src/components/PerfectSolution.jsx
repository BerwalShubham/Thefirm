import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import coaching from "../assets/svg/coaching.svg";
import seo from "../assets/svg/seo.svg";
import digitalpartner from "../assets/svg/digitalpartner.svg";
import bglogo from "../assets/svg/bglogo.svg";
import bussinesssolu from "../assets/png/perfectsolutionimg.png";

const PerfectSolution = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col xl={7} className="position-relative">
            <img
              className="w-100 d-md-none"
              src={bussinesssolu}
              alt="bussinesssolutions"
            />
            <div className="yellow-ellipse"></div>
            <div className="yellow-ellipse yellow-ellipse-2"></div>
            <div className="grey-ellipse"></div>
            <div className="grey-ellipse grey-ellipse-2 d-none d-sm-block"></div>
            <div className="grey-ellipse grey-ellipse-3"></div>
            <img
              className="bg-logo d-none d-sm-block"
              src={bglogo}
              alt="logo"
            />
            <div className="d-md-flex d-none align-items-center justify-content-center justify-content-xl-start">
              <div className="ms-3">
                <div className="solution-sec-img-box text-center d-flex flex-column align-items-center justify-content-center py-5">
                  <img width={102} src={coaching} alt="coaching" />
                  <h4 className="ff-nunito fs-md fw-bold pt-4 mt-2">
                    Coaching
                  </h4>
                  <p className="ff-lora fs-xsm pt-2">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
                <div className="pt-4">
                  <div className="solution-sec-img-box text-center d-flex flex-column align-items-center justify-content-center py-5 mt-5 ms-md-4">
                    <img width={102} src={seo} alt="seo" />
                    <h4 className="ff-nunito fs-md fw-bold pt-4 mt-2">SEO</h4>
                    <p className="ff-lora fs-xsm pt-2">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                </div>
              </div>
              <div className="solution-sec-img-box text-center d-flex flex-column align-items-center justify-content-center py-5 ms-md-5 ms-3">
                <img width={102} src={digitalpartner} alt="digitalpartner" />
                <h4 className="ff-nunito fs-md fw-bold pt-4 mt-2">
                  Digital Partner
                </h4>
                <p className="ff-lora fs-xsm pt-2">
                  Loren rasion gravida auem is bibenua tase
                </p>
              </div>
            </div>
          </Col>
          <Col className="text-center text-xl-start pt-5 pt-xl-0" xl={5}>
            <h2 className="ff-nunito fw-black">
              Perfect Solution for <br /> Your
              <span className="position-relative text-bussiness ps-2">
                Bussiness
              </span>
            </h2>
            <p className="ff-lora fs-xsm pt-2 mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <button className="btn-yellow ff-nunito fw-bold fs-xsm mt-xl-5 mt-4">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerfectSolution;

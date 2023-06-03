import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../assets/png/Herosecimg.png";
import ellipse from "../assets/svg/Ellipse.svg";

const Herosec = () => {
  return (
    <section className="bg-img flex-grow-1 d-flex flex-column align-items-center justify-content-center position-relative overflow_hidden">
      <Container className="hero-sec-container">
        <Row className="flex-column-reverse flex-lg-row">
          <Col className="position-relative" lg={7}>
            <img className="ellipse" src={ellipse} alt="elipse" />
            <div className="text-bg-color mt-4 pb-4 pb-lg-0 d-lg-flex flex-column justify-content-center text-center text-lg-start">
              <h1 className="ff-nunito fs-xl heading fw-black">
                Get Bussiness <br /> Solutions with TheFirm.
              </h1>
              <p className="ff-lora fs-xsm pt-4">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has <br /> been the industry's
                standard dummy.
              </p>
              <button className="btn-yellow fw-bold mt-4 mx-auto mx-lg-0">
                Get in Touch
              </button>
            </div>
          </Col>
          <Col lg={5}>
            <img
              className="heroimg w-100"
              src={heroimg}
              alt="Meeting room in office"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herosec;

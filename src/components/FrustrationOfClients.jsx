import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import questionmark from "../assets/svg/questionmark.svg";
import datareport from "../assets/png/datareport.png";

const FrustrationOfClients = () => {
  return (
    <section className="py-5 bg-off-white sec-frustration-of-clients">
      <Container>
        <Row className="flex-column-reverse flex-lg-row align-items-center">
          <Col lg={6}>
            <h2 className="ff-nunito fw-black fs-lg">
              Frustration of
              <span className="position-relative text-clients"> Clients</span>
            </h2>
            <p className="ff-lora fs-xsm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="ms-lg-4">
              <div className="d-flex align-items-center gap-2 mt-3">
                <img
                  width={14}
                  height={21}
                  src={questionmark}
                  alt="questionmark"
                />
                <p className="ff-lora fs-xsm mb-0">
                  Loren rasion gravida auem is bibenua tase
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <img
                  width={14}
                  height={21}
                  src={questionmark}
                  alt="questionmark"
                />
                <p className="ff-lora fs-xsm mb-0">
                  Lorem Ipsum is simply dummy text of the.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <img
                  width={14}
                  height={21}
                  src={questionmark}
                  alt="questionmark"
                />
                <p className="ff-lora fs-xsm mb-0">
                  Printing and typesetting industry. Lorem Ipsum
                </p>
              </div>
              <div className="d-flex align-items-baseline gap-2 mt-3 pe-5">
                <img
                  width={14}
                  height={21}
                  src={questionmark}
                  alt="questionmark"
                />
                <p className="ff-lora fs-xsm mb-0">
                  When an unknown printer took a galley of type and scrambled it
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            <div className="">
              <img className="w-100" src={datareport} alt="datareport" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FrustrationOfClients;

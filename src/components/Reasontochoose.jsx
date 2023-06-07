import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import brandimg from "../assets/png/brandimg.png";
import speaker from "../assets/svg/speaker.svg";
import searchlogo from "../assets/png/searchlogo.png";
import report from "../assets/png/report.png";
import dataanalysis from "../assets/png/dataanalysis.png";

const Reasontochoose = () => {
  const [tasktab, settasktab] = useState(1);
  return (
    <section className="py-5 bg-grey sec-reason-to-choose">
      <Container>
        <div className="text-center">
          <h2 className="ff-nunito fs-lg fw-black">
            Reason to Choose
            <span className="position-relative text-us"> Us</span>
          </h2>
          <div className="px-lg-5 mx-md-4">
            <p className="ff-lora fs-xsm px-md-5 mx-md-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
        <div className="tasks-tabs-box d-flex align-items-center justify-content-lg-evenly gap-5 mt-5">
          <div
            onClick={() => settasktab(2)}
            className="d-flex align-items-center cursor"
          >
            <svg
              width="41"
              height="22"
              viewBox="0 0 41 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={tasktab === 2 ? "arrow" : "arrow-2"}
                x1="41"
                y1="10"
                x2="22"
                y2="10"
                stroke="#F7F7F7"
                stroke-width="2"
              />
              <circle
                className={tasktab === 2 ? "arrow" : "arrow-2"}
                cx="11"
                cy="11"
                r="10"
                fill="#F7F7F7"
                stroke="#F7F7F7"
                stroke-width="2"
              />
            </svg>
            <div
              className={
                tasktab === 2
                  ? "tasks-box-2 d-flex align-items-center justify-content-center "
                  : "tasks-box d-flex align-items-center justify-content-center cursor"
              }
            >
              <p
                className={
                  tasktab === 2
                    ? "mb-0 ff-nunito fw-bold fs-xsm text-white"
                    : "mb-0 ff-nunito fw-bold fs-xsm color-grey-2"
                }
              >
                Market Research
              </p>
            </div>
          </div>
          <div
            onClick={() => settasktab(1)}
            className="d-flex align-items-center cursor"
          >
            <svg
              width="41"
              height="22"
              viewBox="0 0 41 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={tasktab === 1 ? "arrow" : "arrow-2"}
                x1="41"
                y1="10"
                x2="22"
                y2="10"
                stroke="#F7F7F7"
                stroke-width="2"
              />
              <circle
                className={tasktab === 1 ? "arrow" : "arrow-2"}
                cx="11"
                cy="11"
                r="10"
                fill="#F7F7F7"
                stroke="#F7F7F7"
                stroke-width="2"
              />
            </svg>
            <div
              className={
                tasktab === 1
                  ? "tasks-box-2 d-flex align-items-center justify-content-center "
                  : "tasks-box d-flex align-items-center justify-content-center cursor"
              }
            >
              <p
                className={
                  tasktab === 1
                    ? "mb-0 ff-nunito fw-bold fs-xsm text-white"
                    : "mb-0 ff-nunito fw-bold fs-xsm color-grey-2"
                }
              >
                Branding
              </p>
            </div>
          </div>
          <div
            onClick={() => settasktab(3)}
            className="d-flex align-items-center cursor"
          >
            <svg
              width="41"
              height="22"
              viewBox="0 0 41 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={tasktab === 3 ? "arrow" : "arrow-2"}
                x1="41"
                y1="10"
                x2="22"
                y2="10"
                stroke="#F7F7F7"
                stroke-width="2"
              />
              <circle
                className={tasktab === 3 ? "arrow" : "arrow-2"}
                cx="11"
                cy="11"
                r="10"
                fill="#F7F7F7"
                stroke="#F7F7F7"
                stroke-width="2"
              />
            </svg>
            <div
              className={
                tasktab === 3
                  ? "tasks-box-2 d-flex align-items-center justify-content-center "
                  : "tasks-box d-flex align-items-center justify-content-center cursor"
              }
            >
              <p
                className={
                  tasktab === 3
                    ? "mb-0 ff-nunito fw-bold fs-xsm text-white"
                    : "mb-0 ff-nunito fw-bold fs-xsm color-grey-2"
                }
              >
                Reporting
              </p>
            </div>
          </div>
          <div
            onClick={() => settasktab(4)}
            className="d-flex align-items-center cursor"
          >
            <svg
              width="41"
              height="22"
              viewBox="0 0 41 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={tasktab === 4 ? "arrow" : "arrow-2"}
                x1="41"
                y1="10"
                x2="22"
                y2="10"
                stroke="#F7F7F7"
                stroke-width="2"
              />
              <circle
                className={tasktab === 4 ? "arrow" : "arrow-2"}
                cx="11"
                cy="11"
                r="10"
                fill="#F7F7F7"
                stroke="#F7F7F7"
                stroke-width="2"
              />
            </svg>
            <div
              className={
                tasktab === 4
                  ? "tasks-box-2 d-flex align-items-center justify-content-center "
                  : "tasks-box d-flex align-items-center justify-content-center cursor"
              }
            >
              <p
                className={
                  tasktab === 4
                    ? "mb-0 ff-nunito fw-bold fs-xsm text-white"
                    : "mb-0 ff-nunito fw-bold fs-xsm color-grey-2"
                }
              >
                Data Analysis
              </p>
            </div>
          </div>
        </div>
        <div className="tasks-info-box-bg p-lg-5 mt-5">
          <Row className={tasktab === 2 ? "d-flex" : "d-none"}>
            <Col lg={6}>
              <div className="img-bg-box p-2">
                <img className="w-100" src={brandimg} alt="brand" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex px-2 py-3">
                <div className="light-yellow-circle d-flex align-items-center justify-content-center">
                  <div className="yellow-circle d-flex align-items-center justify-content-center">
                    <img
                      className="market-research-logo"
                      src={searchlogo}
                      alt="speaker"
                    />
                  </div>
                </div>
                <div className="pt-2 mt-1 ms-3">
                  <h2 className="ff-nunito fs-md heading fw-bold mb-0 marketing position-relative">
                    Market Research
                  </h2>
                  <p className="ff-lora fs-xsm pt-3 pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa dolore saepe magnam soluta, ab rem iusto? Dolorem
                    temporibus assumenda corrupti!
                  </p>
                  <button className="btn-read-more ff-nunito fw-bold mt-xxl-4 mt-3">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={tasktab === 1 ? "d-flex" : "d-none"}>
            <Col lg={6}>
              <div className="img-bg-box p-2">
                <img className="w-100" src={brandimg} alt="brand" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex px-2 py-3">
                <div className="light-yellow-circle d-flex align-items-center justify-content-center">
                  <div className="yellow-circle d-flex align-items-center justify-content-center">
                    <img className="speaker" src={speaker} alt="speaker" />
                  </div>
                </div>
                <div className="pt-2 mt-1 ms-3">
                  <h2 className="ff-nunito fs-md heading fw-bold mb-0 branding position-relative">
                    Branding
                  </h2>
                  <p className="ff-lora fs-xsm pt-3 pb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className="btn-read-more ff-nunito fw-bold mt-xxl-4 mt-3">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={tasktab === 3 ? "d-flex" : "d-none"}>
            <Col lg={6}>
              <div className="img-bg-box p-2">
                <img className="w-100" src={brandimg} alt="brand" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex px-2 py-3">
                <div className="light-yellow-circle d-flex align-items-center justify-content-center">
                  <div className="yellow-circle d-flex align-items-center justify-content-center">
                    <img
                      className="report-and-data-analysis"
                      src={report}
                      alt="speaker"
                    />
                  </div>
                </div>
                <div className="pt-2 mt-1 ms-3">
                  <h2 className="ff-nunito fs-md heading fw-bold mb-0 report position-relative">
                    Report
                  </h2>
                  <p className="ff-lora fs-xsm pt-3 pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora facere quae repellendus aspernatur optio eius rem
                    officiis eos distinctio, tempore nisi, atque eligendi qui
                    exercitationem.
                  </p>
                  <button className="btn-read-more ff-nunito fw-bold mt-xxl-4 mt-3">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={tasktab === 4 ? "d-flex" : "d-none"}>
            <Col lg={6}>
              <div className="img-bg-box p-2">
                <img className="w-100" src={brandimg} alt="brand" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex px-2 py-3">
                <div className="light-yellow-circle d-flex align-items-center justify-content-center">
                  <div className="yellow-circle d-flex align-items-center justify-content-center">
                    <img
                      className="report-and-data-analysis"
                      src={dataanalysis}
                      alt="speaker"
                    />
                  </div>
                </div>
                <div className="pt-2 mt-1 ms-3">
                  <h2 className="ff-nunito fs-md heading fw-bold mb-0 data-analysis position-relative">
                    Data Analysis
                  </h2>
                  <p className="ff-lora fs-xsm pt-3 pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum laudantium doloribus hic?
                  </p>
                  <button className="btn-read-more ff-nunito fw-bold mt-xxl-4 mt-3">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Reasontochoose;

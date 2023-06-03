import React from "react";
import { Container } from "react-bootstrap";
import mapimg from "../assets/png/map.png";

const GetInTouch = () => {
  return (
    <section className="pt-5 sec-get-in-touch">
      <img className="w-100" src={mapimg} alt="map" />
      <Container>
        <div className="form-box p-5 mx-auto">
          <h2 className="ff-nunito fw-black fs-lg text-center">
            Get in <span className="position-relative text-touch"> Touch</span>
          </h2>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between">
            <div className="d-flex flex-column">
              <label className="ff-nunito fs-14 color-grey" htmlFor="Name">
                Name
              </label>
              <input className="form-input mx-auto" type="text" />
            </div>
            <div className="d-flex flex-column mt-5 mt-sm-0">
              <label className="ff-nunito fs-14 color-grey" htmlFor="Name">
                Email
              </label>
              <input className="form-input" type="text" />
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between mt-5 pt-sm-3">
            <div className="d-flex flex-column">
              <label className="ff-nunito fs-14 color-grey" htmlFor="Name">
                Phone
              </label>
              <input className="form-input" type="text" />
            </div>
            <div className="d-flex flex-column mt-5 mt-sm-0">
              <label className="ff-nunito fs-14 color-grey" htmlFor="Name">
                Subject
              </label>
              <select className="form-select pt-1 pb-2 cursor-pointer">
                <option disabled selected hidden>
                  Choose your subject
                </option>
                <option value="">Research</option>
                <option value="">Data Analytics</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-5 pt-4">
            <button className="btn-yellow ff-nunito fw-bold">Submit</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;

import React from "react";
import Herosec from "./Herosec";
import TheFirmNav from "./TheFirmNav";

const TheFrimHeader = () => {
  return (
    <section>
      <div className="min-h-100 d-flex flex-column">
        <TheFirmNav />
        <Herosec />
      </div>
    </section>
  );
};

export default TheFrimHeader;

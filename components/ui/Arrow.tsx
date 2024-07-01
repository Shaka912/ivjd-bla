import React from "react";

const Arrow = ({ arrow = "arrow-red-vector.svg", red = false }) => {
  return (
    <div className="arrow-container">
      <div
        className="arrow-line"
        style={{ background: red ? "black" : "red" }}
      ></div>
      <img src={"Images/" + arrow} className="arrow-image" alt="" />
    </div>
  );
};

const ArrowSm = ({ arrow = "arrow-red-vector-sm.svg", red = false }) => {
  return (
    <div className="arrow-container-sm">
      <div className="arrow-line-sm" style={{ background: "red" }}></div>
      <img src={"/Images/" + arrow} className="arrow-image-sm" alt="" />
    </div>
  );
};

export { Arrow, ArrowSm };

import React from "react";
import IMG from "../../../Image/over/over__1.png";
import IMG2 from "../../../Image/over/over__2.png";
import IMG3 from "../../../Image/over/over__3.png";
function Over() {
  return (
    <div>
      <div>
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2">
          <div style={{ width: "400px" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={IMG}
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div style={{ width: "400px" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={IMG2}
              alt=""
              data-aos="zoom-in"
            />
          </div>

          <div style={{ width: "400px" }}>
            <img
              style={{ maxWidth: "100%" }}
              src={IMG3}
              alt=""
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Over;

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Image/slider/slider1.png";
import slider2 from "../../Image/slider/slider2.png";
import slider3 from "../../Image/slider/slider3.png";
import slider4 from "../../Image/slider/slider4.png";

function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            className=""
            src={slider1}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50% عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background2" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={slider2}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50% عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center w-100">
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={slider3}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50% عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "296px", width: "313.53px" }}
            src={slider4}
            alt="First slide"
          />
          <div className="">
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل 50% عند شرائك</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

import React from "react";
import { Col, Row } from "react-bootstrap";
import laptops from "../../Image/labtop.png";

function DiscountSection() {
  return (
    <div className="p-2">
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل حتي 30% علي اجهزة الاب توب
          </div>
        </Col>
        <Col sm="6">
          <img src={laptops} className="discount-img" alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default DiscountSection;

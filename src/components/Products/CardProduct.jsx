import React, { useEffect, useState } from "react";
import "./cardProduct.css";
import { Col } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addItem } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

function CardProduct({ product }) {
  const dispatch = useDispatch();

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      if (color === "") {
        setColor(product.color[0]);
      }
      if (size === "") {
        setSize(product.size[0]);
      }
    };
    fetchProducts();
  }, [product.color, product.size, color, size]);
  const handleCart = () => {
    dispatch(
      addItem({ ...product, color, quantity: 1, size, date: new Date() - 1 })
    );
  };
  const icon = "fs-3 bg-white rounded-circle p-2 icon product__icon";
  return (
    <Col
      xs="12"
      sm="6"
      md="4"
      lg="2"
      className="overlay mb-4 p-4 position-relative"
      data-aos="fade-up"
    >
      <div >
        <div>
          <img
            src={product.img}
            alt={product.title}
            className="w-100"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className="product__icons d-flex position-absolute start-50 top-50 translate-middle">
          <Link to={`/products/${product._id}`}>
            <AiOutlineSearch
              className={icon}
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
            />
          </Link>
          <AiOutlineShoppingCart
            onClick={() => handleCart()}
            className={`mx-4 ${icon}`}
            style={{ width: "35px", height: "35px", cursor: "pointer" }}
          />
        </div>
      </div>
    </Col>
  );
}

export default CardProduct;

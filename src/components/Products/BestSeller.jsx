import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { publicRequest } from "../../Api/requestMethod.js";
import CardProduct from "./CardProduct.jsx";
import Loader2 from "../../Pages/loader/Loader2.jsx";

function BestSeller({ title, btnTitle }) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      try {
        const res = await publicRequest.get(
          title === "جميع المنتجات" ? "products" : `products?category=${title}`
        );
        setData(res.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchProducts();
  }, [title]);
  const products =
    title === "جميع المنتجات" ? data.slice(0, 12) : data.slice(0, 6);
  return (
    <div className="p-2 position-relative" style={{ minHeight: "400px" }}>
      <div className="d-flex justify-content-between align-items-center p-2 border">
        <div className="sub-title fw-bold">{title}</div>
        <Link
          to={title === "جميع المنتجات" ? "/products" : `/category/${title}`}
        >
          <button className="btn btn-dark">{btnTitle}</button>
        </Link>
      </div>
      {load ? (
        <Loader2 width="100px" height="100px" />
      ) : (
        <Row className="d-flex mt-3 m-0 " data-aos="fade-up">
          {products?.map((product) => (
            <CardProduct product={product} key={product._id} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default BestSeller;

import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProduct from "../Products/CardProduct";
import { publicRequest } from "../../Api/requestMethod";
import { useParams } from "react-router";
import Loader2 from "../../Pages/loader/Loader2";

function SuggestedProducts({ category }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get(`products?category=${category}`);
        setData(res.data);
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchProducts();
  }, [category]);
  const products = data.filter((e) => e._id !== id).slice(0, 6);
  return (
    <div className="mx-3 position-relative" style={{ minHeight: "270px" }}>
      <div className="d-flex align-items-center gap-2">
        <h2>مقترحات</h2>
      </div>
      <hr />
      {load ? (
        <Loader2 width="100px" height="100px" />
      ) : (
        <Row className="d-flex mt-3 m-0">
          {products?.map((product) => (
            <CardProduct product={product} key={product._id} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default SuggestedProducts;

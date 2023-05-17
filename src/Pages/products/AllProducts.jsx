import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import img3 from "../../Image/hhh/download (2).jpg";
import Pagination from "../../components/pagination/Pagination";
import CardProduct from "../../components/Products/CardProduct";
import { publicRequest } from "../../Api/requestMethod";
import Loader3 from "../loader/Loader3";
import { AiOutlineSearch } from "react-icons/ai";
import "./allProducts.css";

function AllProducts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("الاحدث");
  const [filterProducts, setFilterProducts] = useState([]);
  const { id } = useParams();
  const [dataLength, setDataLength] = useState([]);
  const [load, setLoad] = useState(false);
  const [searchByTitle, setSearchByTitle] = useState("");
  const limit = 30;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      try {
        const res = await publicRequest.get(
          id
            ? `products?category=${id}&page=${page}&limit=${limit}`
            : `products?page=${page}&limit=${limit}`
        );
        setLoad(false);
        setData(res.data);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchProducts();
  }, [id, page]);

  useEffect(() => {
    const fetchProductsLength = async () => {
      try {
        const res = await publicRequest.get(
          id ? `products?category=${id}` : `products`
        );
        setDataLength(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsLength();
  }, [id]);

  useEffect(() => {
    setFilterProducts(
      data.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filters, data]);

  useEffect(() => {
    if (sort === "الاحدث") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "الاعلي") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  const handleFilters = (e) => {
    const value = e.target.value;
    if (value === "الكل") {
      setFilters({});
    } else {
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    }
  };
  console.log(id);
  return (
    <div className=" products p-2">
      <div
        className="py-3 px-4 mt-2 fs-4 fw-bold"
        style={{ borderBottom: "1px solid #999" }}
      >
        {id ? id : "جميع المنتجات"}
      </div>
      <img
        src={img3}
        alt="A"
        className="mt-3"
        style={{ width: "100%" }}
        data-aos="fade-up"
      />
      <div className=" sort d-flex align-items-center justify-content-between">
        {id === "الاحذية" || id === "ملابس" ? (
          <div className="d-flex align-items-center mt-3">
            <h4 style={{ whiteSpace: "nowrap" }}>تصنيف حسب :</h4>
            <div className="mx-2">
              <select
                className="form-select "
                name="color"
                onChange={handleFilters}
              >
                <option selected disabled>
                  اللون
                </option>
                <option>الكل</option>
                <option>white</option>
                <option>red</option>
                <option>yellow</option>
                <option>green</option>
                <option>black</option>
                <option>blue</option>
              </select>
            </div>
            <div>
              <select
                className="form-select "
                name="size"
                onChange={handleFilters}
              >
                <option selected disabled>
                  الحجم
                </option>
                {id === "ملابس" ? (
                  <>
                    <option>الكل</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </>
                ) : (
                  <>
                    <option>الكل</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                  </>
                )}
              </select>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex align-items-center mt-3">
          <h4 style={{ whiteSpace: "nowrap" }}>تصنيف المنتجات :</h4>
          <div className="mx-3">
            <select
              className="form-select "
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="الاحدث">الاحدث</option>
              <option value="الاعلي">السعر (الاعلي)</option>
              <option value="الاقل">السعر (الاقل)</option>
            </select>
          </div>
        </div>
      </div>
      <form className="w-50 position-relative mt-3 mx-auto" role="search">
        <input
          className="form-control bg-white fw-bold"
          type="search"
          placeholder="اكتب اسم المنتج اللي بتدور عليه وسيب الباقي علينا"
          onChange={(e) => setSearchByTitle(e.target.value)}
          style={{ height: "50px", fontFamily: "inherit " }}
        />
        <AiOutlineSearch
          className=" fs-3  position-absolute top-50"
          style={{
            fontSize: "30",
            left: "10px",
            transform: "translatey(-50%)",
          }}
        />
      </form>
      <div
        className="py-3 px-4 my-3"
        style={{ border: "1px solid #999" }}
        data-aos="fade-up"
      >
        اكثر من <span className="fw-bold">{data ? dataLength : ""}</span> منتج{" "}
        <span style={{ color: "red" }}>{id ? id : "جميع المنتجات"}</span>
      </div>
      <div className="fw-bold" style={{ fontSize: "24px" }} data-aos="fade-up">
        تخفيضات حتي 65% | تسوق أقوى العروض للهدايا
      </div>
      <div className="position-relative" style={{ minHeight: "300px" }}>
        {load ? (
          <Loader3 width="150px" height="150px" />
        ) : (
          <Row className="d-flex mt-3 m-0">
            {filterProducts
              .filter((items) => {
                return searchByTitle.toLowerCase() === ""
                  ? items
                  : items.title.toLowerCase().includes(searchByTitle);
              })
              .map((product) => (
                <CardProduct product={product} key={product._id} />
              ))}
          </Row>
        )}
      </div>
      <Pagination limit={limit} dataLength={dataLength} setPage={setPage} />
    </div>
  );
}

export default AllProducts;

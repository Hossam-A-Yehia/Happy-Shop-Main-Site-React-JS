import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../Api/requestMethod";
import "./singelProduct.css";
import { addItem } from "../../store/CartSlice";
import { RiStarSFill } from "react-icons/ri";
import IMG from "../../Image/single/57357.gif";
import IMG2 from "../../Image/single/497-truck-delivery-outline.gif";
import IMG3 from "../../Image/single/177-envelope-mail-send-outline.gif";
import IMG4 from "../../Image/single/220-arrow-9.gif";
import IMG5 from "../../Image/single/946-equity-security-outline.gif";
import Comments from "../../components/comments/Comments";
import SuggestedProducts from "../../components/stggested/SuggestedProducts";
import Loader from "../loader/Loader";

function SingleProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { id } = useParams();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoad(true);
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
        if (color === "") {
          setColor(res.data.color[0]);
        }
        if (size === "") {
          setSize(res.data.size[0]);
        }
        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchProducts();
  }, [id, color, size]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleCart = () => {
    dispatch(
      addItem({ ...product, color, quantity, size, date: new Date() - 1 })
    );
  };
  const flex = "d-flex align-items-center";
  const button = "border-0 bg-transparent fw-bold fs-2";
  return (
    <div className="p-2 my-3 position-relative" style={{ minHeight: "calc(100vh - 100px)" }}>
      {load ? (
        <Loader width="150px" height="150px" />
      ) : (
        <>
          <div className="row d-flex m-0" >
            <div className="col-md-5 p-4 text-center">
              <img
                className="w-50 "
                src={product?.img}
                alt="a"
                style={{ height: "50vh" }}
              />
            </div>
            <div className=" p-3 col-md-4 ">
              <div>
                <h1>{product?.title}</h1>
                <p className="my-4 text-secondary">{product?.desc}</p>
                <p className="fs-4 fw-medium d-flex align-items-center justify-content-between">
                  <div>
                    {product?.price} <sup>جنيه</sup>
                  </div>
                  <div
                    className="alert alert-info p-2 d-flex align-items-center gap-2"
                    role="alert"
                    style={{ fontSize: "15px", width: "fit-content" }}
                  >
                    <span>{product?.rate}</span>
                    <RiStarSFill />
                  </div>
                </p>
              </div>
              <div className={` ${flex} justify-content-between`}>
                {product?.color.length > 0 && (
                  <div className={`${flex} justify-content-center gap-2`}>
                    <h5>اللون</h5>
                    {product?.color.map((e) => (
                      <span
                        key={e}
                        onClick={() => setColor(e)}
                        className="rounded-circle border d-block"
                        style={{
                          width: "23px",
                          height: "23px",
                          backgroundColor: `${e}`,
                          cursor: "pointer",
                        }}
                      ></span>
                    ))}
                  </div>
                )}
                {product?.size.length > 0 && (
                  <div className={`${flex} justify-content-center gap-2`}>
                    <h5>الحجم</h5>
                    <select
                      selected
                      className="form-select "
                      name="size"
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {product?.size.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <div
                className={`alert p-1 border border-primary mt-2 ${flex} justify-content-center rounded`}
                role="alert"
              >
                <img src={IMG} alt="5737" style={{ width: "80px" }} />
                <p style={{ fontSize: "13px", color: "#777" }}>
                  اتبرع لمستشفى 57357، لعلاج الاطفال من مرض السرطان بالمجان
                  وساعد في علاج اكبر عدد منهم{" "}
                </p>
              </div>
              <div className={`${flex} gap-5 my-2`}>
                <div className={`${flex} gap-2`}>
                  <button
                    onClick={() => handleQuantity("dec")}
                    className={button}
                  >
                    -
                  </button>
                  <span
                    className="d-block border border-primary rounded-2 py-1 px-3"
                    value={quantity}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity("cre")}
                    className={button}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-outline-primary "
                  onClick={() => handleCart()}
                >
                  اضافة الي العربة
                </button>
              </div>
            </div>
            <div className="col-md-3 p-2 ">
              <div className={`${flex} gap-2 border-bottom py-2`}>
                <img src={IMG4} alt="" style={{ width: "50px" }} />
                <span style={{ fontSize: "14px " }}>
                  لا يمكن استبدال أو ارجاع هذا المنتج بعد 15 يوم
                </span>
              </div>
              <div className={`${flex} gap-2 border-bottom py-2`}>
                <img src={IMG3} alt="" style={{ width: "50px" }} />
                <span style={{ fontSize: "15px " }}>شحن موثوق به</span>
              </div>
              <div className={`${flex} gap-2 border-bottom py-2 `}>
                <img src={IMG2} alt="" style={{ width: "50px" }} />
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px " }}>
                    توصيل مجاني
                  </span>
                  <span
                    className="d-block text-secondary"
                    style={{ fontSize: "13px " }}
                  >
                    بدون مصاريف شحن لما تشتري ب 200 جنيه أو أكتر
                  </span>
                </div>
              </div>
              <div className={`${flex} gap-2 border-bottom py-2 `}>
                <img src={IMG5} alt="" style={{ width: "50px" }} />
                <div>
                  <span className="fw-bold" style={{ fontSize: "16px " }}>
                    تسوق أمن
                  </span>
                  <span
                    className="d-block text-secondary"
                    style={{ fontSize: "13px " }}
                  >
                    بياناتك محمية دائما
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SuggestedProducts category={product?.categories[0]} />
          <Comments img={product?.img} title={product?.title} />
        </>
      )}
    </div>
  );
}

export default SingleProduct;

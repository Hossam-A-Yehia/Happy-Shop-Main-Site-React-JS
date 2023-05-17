import logo from "../Image/logo.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/CartSlice";
import { logout } from "../store/userSlice";

function NavBar({ setComplaintTrue }) {
  const { quantity, cartProducts, total } = useSelector((state) => state.cart);
  const { userAccount } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{ height: "auto" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid px-4">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "65px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="w-100 position-relative me-3 " role="search">
              <input
                className="form-control me-2 bg-white"
                type="search"
                placeholder="بتدور علي ايه"
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
            {userAccount && (
              <div
                onClick={() => setComplaintTrue(true)}
                className="navbar-brand d-flex align-items-center  "
                style={{ cursor: "pointer" }}
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                >
                  <BiDislike
                    className=""
                    style={{
                      fontSize: "30px",
                      color: "#2196f3",
                    }}
                  />
                </div>
                <span
                  className="fw-bold"
                  style={{
                    fontSize: "13px",
                    margin: "14px -7px 0",
                    color: "#fff",
                  }}
                >
                  ارسال شكوي
                </span>
              </div>
            )}

            {userAccount ? (
              <Link
                onClick={() => dispatch(logout())}
                to=""
                className="navbar-brand d-flex align-items-center  "
                href="#"
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                >
                  <BiLogOutCircle
                    className=""
                    style={{
                      fontSize: "30px",
                      color: "#2196f3",
                    }}
                  />
                </div>
                <span
                  className="fw-bold"
                  style={{
                    fontSize: "13px",
                    margin: "14px -7px 0",
                    color: "#fff",
                  }}
                >
                  تسجيل خروج
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="navbar-brand d-flex align-items-center  "
                href="#"
              >
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                >
                  <FaUserCircle
                    className=""
                    style={{
                      fontSize: "30px",
                      color: "#2196f3",
                    }}
                  />
                </div>
                <span
                  className="fw-bold"
                  style={{
                    fontSize: "13px",
                    margin: "14px -7px 0",
                    color: "#fff",
                  }}
                >
                  تسجيل دخول
                </span>
              </Link>
            )}
            <Link
              to="/cart"
              className="navbar-brand d-flex align-items-center "
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "3rem", height: "3rem", position: "relative" }}
              >
                <BsFillCartCheckFill
                  style={{ fontSize: "30", color: "#2196f3" }}
                />
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    color: "white",
                    top: "0",
                    right: "0",
                    transform: "translate(25%,25%)",
                    fontSize: "15px",
                  }}
                >
                  {quantity}
                </div>
              </div>
              <span
                className="fw-bold"
                style={{
                  fontSize: "13px",
                  margin: "14px -10px 0",
                  color: "#fff",
                }}
              >
                عربة التسوق
              </span>
            </Link>
            {JSON.parse(localStorage.getItem("user")) && (
              <Link
                to={`/update/${JSON.parse(localStorage.getItem("user"))._id}`}
              >
                <img
                  src={JSON.parse(localStorage.getItem("user")).img}
                  className="me-4 rounded-circle"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end "
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            عربة التسوق
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body position-relative">
          {cartProducts?.map((e) => (
            <div
              key={e.date}
              className="d-flex align-items-center justify-content-between p-2 border-bottom"
            >
              <div className="d-flex align-items-center">
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    marginLeft: "10px",
                  }}
                  src={e.img}
                  alt=""
                />
                <div>
                  <p className="m-0 mb-2" style={{ fontSize: "15px" }}>
                    {e.title}
                  </p>
                  <span className="text-secondary">
                    {e.price} <sup>جنيه</sup>
                  </span>
                  <span className="d-block">{e.quantity}</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="text-secondary ms-3">
                  {e.price * e.quantity} <sup>جنيه</sup>
                </div>
                <div
                  onClick={() => dispatch(removeItem(e))}
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  className="py-1 px-2 fw-bold text-danger border border-2 rounded"
                >
                  X
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between mt-3 ">
              <h5 className="fw-bold">الاجمالي :</h5>
              <div className=" fw-bold">
                {total} <sup>جنيه</sup>
              </div>
            </div>
            <a href="/cart" className="btn btn-primary text-white">
              الذهاب الي سلة المشتريات
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

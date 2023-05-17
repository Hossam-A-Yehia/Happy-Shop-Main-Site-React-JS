import React from "react";
import { Link } from "react-router-dom";
import CATY from "../Api/categoryAPI.js";

function SecNav() {
  const cat = CATY.slice(15, 25);
  const hideCat = CATY.slice(0, 15);
  return (
    <div
      className="sec__nav bg-white w-100 border-bottom border-danger"
      style={{ maxHeight: "50px", overflow: "hidden" }}
    >
      <div className="container-fluid h-100">
        <ul className="nav nav-pills h-100  d-flex align-items-center">
          <li className="nav-item dropdown d-flex align-items-center justify-content-center m-1">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center gap-5 fw-bold bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
              data-bs-toggle="dropdown"
              href="#A"
              role="button"
              aria-expanded="false"
            >
              جميع الفئات
            </a>
            <ul className="dropdown-menu">
              {hideCat?.map((e) => (
                <li key={e.id}>
                  <Link
                    to={`category/${e.title}`}
                    className="dropdown-item fw-bold"
                    href="#"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {cat?.map((e) => (
            <li key={e.id} className="nav-item">
              <Link
                to={`category/${e.title}`}
                className="nav-link fw-bold"
                href="#"
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SecNav;

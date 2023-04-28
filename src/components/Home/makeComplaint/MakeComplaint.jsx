import React, { useRef } from "react";
import "./makeComplaint.css";
import { publicRequest } from "../../../Api/requestMethod.js";

function MakeComplaint({ complaintTrue, setComplaintTrue }) {
  const massage = useRef("");

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post("complaints", {
        complaint: massage.current.value,
        userId: userInfo._id,
        img: userInfo.img,
        username: userInfo.username,
      });
      massage.current.value = "";
      setComplaintTrue(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="makeCopmlaint position-fixed top-0 start-0 "
      style={
        complaintTrue
          ? { width: "100% ", height: "100%", opacity: "1" }
          : { width: "0", height: "0", opacity: "0" }
      }
    >
      <form
        className="position-absolute top-50 start-50 translate-middle "
        onSubmit={handleSubmit}
      >
        <div
          className="container my-0 mx-auto text-center rounded position-relative p-3"
          style={{ width: "420px", backgroundColor: "#fff" }}
        >
          <div className="head rounded">
            <h2 className="text-center fs-3 py-2 px-0 text-black">
              ارسال شكوي
            </h2>
          </div>
          <textarea
            className="form-control w-100 mt-3 pb-5"
            style={{ backgroundColor: "#f1e9e9" }}
            placeholder="الشكوي"
            ref={massage}
            required
          ></textarea>
          <div className=" d-flex align-items-center justify-content-between mt-4 ">
            <button className="btn btn-primary" type="submit">
              ارسال
            </button>
            <div
              className="btn btn-danger"
              onClick={() => setComplaintTrue(false)}
            >
              اغلاق
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MakeComplaint;

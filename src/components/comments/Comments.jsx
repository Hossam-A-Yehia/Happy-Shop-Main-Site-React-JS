import React, { useEffect, useState } from "react";
import { publicRequest } from "../../Api/requestMethod";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import Loader3 from "../../Pages/loader/Loader3";
function Comments({img,title}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const [render, setRender] = useState(0);
  const [load, setLoad] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchComments = async () => {
      setLoad(true)

      try {
        const res = await publicRequest.get(`comments/find/${id}`);
        setComments(res.data);
        setLoad(false)
      } catch (err) {
        console.log(err);
        setLoad(false)

      }
    };
    fetchComments();
  }, [id, render]);

  const handleClick = async (e) => {
    try {
      await publicRequest.post("comments", {
        productId: id,
        userId: userInfo?._id,
        img: userInfo?.img,
        comment,
        username: userInfo?.username,
        productImg:img,
        productTitle:title
      });
      setComment("");
    } catch (err) {
      console.log(err);
    }
    setRender(render + 1);
  };

  const handleDelete = async (e) => {
    try {
      await publicRequest.delete(`comments/${e}`);
    } catch (err) {
      console.log(err);
    }
    setRender(render + 1);
  };
  return (
    <div className="container position-relative" style={{ minHeight: "130px" }}>
      {load ?<Loader3 width="100px" height="100px"/>:<>
      <div className="d-flex align-items-center gap-2">
        <h2>التعليقات</h2>
        <span className="fw-bold fs-4">( {comments.length} )</span>
      </div>
      <hr />
      <div className="d-flex flex-column">
        {comments.map((e) => (
          <div
            className="p-3 mb-3 rounded-3"
            style={{ background: "#eeeeeea6" }}
            key={e._id}
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src={e.img}
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <div className="d-flex flex-column align-items-start">
                <span className=" fw-bold">{e.username}</span>
                <span
                  className="text-secondary "
                  style={{ fontSize: "15px", direction: "ltr" }}
                >
                  {format(e.createdAt)}
                </span>
              </div>
            </div>
            <div className="d-flex">
              <p className="my-2 me-5 fw-bold">{e.comment}</p>
              {userInfo?._id === e.userId && (
                <button
                  onClick={() => handleDelete(e._id)}
                  className="btn btn-danger me-auto"
                >
                  حذف
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="disabled d-flex align-items-center gap-3 my-3 p-3 border border-info rounded-pill"
        style={
          !userInfo
            ? { pointerEvents: "none", opacity: "0.5" }
            : { pointerEvents: "all", opacity: "1" }
        }
      >
        <img
          src={userInfo?.img}
          alt=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          className="form-control rounded "
          style={{ height: "50px" }}
          placeholder="اكتب تعليقك"
          value={comment}
        />
        <button
          className="btn btn-primary"
          onClick={handleClick}
          style={{ whiteSpace: "nowrap" }}
        >
          اضافة تعليق
        </button>
      </div>
      {!userInfo && (
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <span className="text-danger fw-bold">
            يجب عليك تسجيل الدخول اولا لكتابة تعليق
          </span>
          <Link className="btn btn-outline-info " to="/login">
            تسجيل دخول
          </Link>
        </div>
      )}</>}
    </div>
  );
}

export default Comments;

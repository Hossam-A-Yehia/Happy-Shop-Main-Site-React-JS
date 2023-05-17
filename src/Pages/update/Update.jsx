import "./update.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdPublish } from "react-icons/md";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useParams } from "react-router-dom";
import { userRequest } from "../../Api/requestMethod";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import app from "../../firebase.js";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/userSlice";

export default function Update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [updateUser, setUpdateUser] = useState({});
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (file !== null) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("IMG Erorr ");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(downloadURL);
          });
        }
      );
    }
  }, [id, file]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.put(`users/${id}`, {
        ...updateUser,
        img: img ? img : userInfo.img,
      });
      console.log(res.data);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(img);
  return (
    <div className="m-3 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <h1>تحديث الحساب الشخصي</h1>
      </div>
      <div className="update d-flex mt-3  gap-3">
        <div className="shadow p-3" style={{ flex: "1" }}>
          <div className="d-flex align-items-center">
            <img
              src={userInfo.img}
              alt=""
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column me-3">
              <span className="fw-bold">{userInfo.username}</span>
              <span
                className="text-secondary fw-bold"
                style={{ fontSize: "14px" }}
              >
                {userInfo.isAdmin ? "مسؤول" : "مستخدم"}
              </span>
            </div>
          </div>
          <div className="mt-3">
            <span
              className="fw-bold text-secondary"
              style={{ fontSize: "14px" }}
            >
              معلومات المستخدم
            </span>
            <div className="d-flex align-items-center mx-0 my-3">
              <BsFillPersonFill className="fs-5" />
              <span className="me-2">{userInfo.username}</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <FcOvertime className="fs-5" />
              <span className="me-2" style={{ direction: "ltr" }}>
                {format(userInfo.createdAt)}
              </span>
            </div>
            <span
              className="fw-bold text-secondary"
              style={{ fontSize: "14px" }}
            >
              وسائل التواصل
            </span>
            <div className="d-flex align-items-center mx-0 my-3">
              <AiFillPhone className="fs-5" />
              <span className="me-2"> {userInfo.phone} +20</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <AiOutlineMail className="fs-5" />
              <span className="me-2">{userInfo.email}</span>
            </div>
            <div className="d-flex align-items-center mx-0 my-3">
              <CiLocationOn className="fs-5" />
              <span className="me-2">{userInfo.address}</span>
            </div>
          </div>
        </div>
        <div className="shadow p-3" style={{ flex: "2" }}>
          <span className="fw-bold fs-4">تحديث</span>
          <form className="d-flex justify-content-between mt-3">
            <div className="inputs w-50">
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  اسم المتسخدم
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder={userInfo.username}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  البريد الالكتروني
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder={userInfo.email}
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  العنوان
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder={userInfo.address}
                  onChange={handleChange}
                  className="form-control "
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  رقم الهاتف
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder={userInfo.phone}
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column mt-1">
                <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                  كلمة السر
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="يجب كتابة كلمة السر"
                  className="form-control "
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={img ? img : userInfo.img}
                  alt=""
                  className="rounded ms-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <label htmlFor="file">
                  <MdPublish className="fs-4" style={{ cursor: "pointer" }} />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <button className="btn btn-success" onClick={handleClick}>
                تحديث
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

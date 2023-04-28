import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../../Api/requestMethod";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(null);

  const [runn, setRuun] = useState(false);

  const [run, setRun] = useState(false);
  const [flag, setFlag] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRun(true);
    setRuun(true);
    if (
      username === "" ||
      email === "" ||
      phone === ""||
      address === "" ||
      password.length < 8 ||
      password !== ConfirmPassword
    ) {
      setFlag(false);
      setRuun(false);
    }
    if (flag) {
      try {
        const res = await publicRequest.post("/auth/register", {
          username,
          email,
          password,
          address,
          phone
        });
        res.data && window.location.replace("/login");
        setRuun(false);
      } catch (err) {
        console.log(err);
        setRuun(false);
      }
    }
  };

  return (
    <div className="register  d-flex align-items-center justify-content-center w-100  ">
      <div style={{ width: "800px" }}>
        <form
          className="  mx-auto my-5 w-100"
          style={{ position: "relative", zIndex: "4" }}
          onSubmit={handleSubmit}
        >
          <div className=" d-flex gap-4 align-items-center justify-content-center w-100 flex-wrap">
            <div className="col-12 col-md-5 p-2">
              <label className="text-white  px-2 mt-3 mb-1">الاسم</label>
              <input
                type="text"
                className="form-control  "
                placeholder="اكتب اسمك"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              {username === "" && run && (
                <p className="text-danger fs-5">يجب كتابة اسم المستخدم</p>
              )}

              <label className="text-white px-2 mt-3 mb-1">كلمة المرور</label>
              <input
                type="password"
                className="form-control"
                placeholder="اكتب كلمة المرور"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {password.length < 8 && run && (
                <p className="text-danger fs-5">كلمة السر اقل من 8</p>
              )}
              <label className="text-white px-2 mt-3 mb-1">العنوان</label>
              <input
                type="text"
                className="form-control"
                placeholder="العنوان بالكامل"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              { address === ""  && run && (
                <p className="text-danger fs-5">يجب كتابة العنوان</p>
              )}

            </div>
            <div className="col-12 col-md-5 p-2">
              <label className="text-white px-2 mt-3 mb-1">
                البريد الالكتروني
              </label>
              <input
                type="email"
                className="form-control "
                placeholder="اكتب بريدك الالكتروني"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {email === "" && run && (
                <p className="text-danger fs-5">يجب كتابة البريد الالكتروني</p>
              )}

              <label className="text-white px-2 mt-3 mb-1">
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="اكتب كلمة المرور"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
              />
              {password !== ConfirmPassword && run && (
                <p className="text-danger fs-5">كلمة المرور غير مطابقة</p>
              )}
              <label className="text-white px-2 mt-3 mb-1">
                الهاتف
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="اكتب رقم هاتفك"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {phone === null && run && (
                <p className="text-danger fs-5">يجب كتابة الهاتف</p>
              )}
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mt-3"
              disabled={runn}
              type="submit"
            >
              انشاء حساب
            </button>
            <div className="mt-2 text-center text-white">
              لديك حساب بالفعل ؟
              <Link to="/login" className="text-info fw-bold">
                تسجيل دخول
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

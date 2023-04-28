import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home/HomePage";
import Navbar from "./Utils/NavBar";
import Register from "./Pages/Auth/Register";
import Category from "./Pages/category/Category";
import AllProducts from "./Pages/products/AllProducts";
import Cart from "./Pages/cart/Cart";
import SingleProduct from "./Pages/singelProduct/SingleProduct";
import Success from "./Pages/success/Success";
import Erorr from "./Pages/notFound/Erorr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import { useSelector } from "react-redux";
import Update from "./Pages/update/Update";
import MakeComplaint from "./components/Home/makeComplaint/MakeComplaint";
import { useEffect, useState } from "react";
import Loader2 from "./Pages/loader/Loader2";
import AOS from "aos"

import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, [])
  const {userAccount} = useSelector(state => state.user)
  const [complaintTrue, setComplaintTrue] = useState(false)

  return (
    <Router>
      <ToastContainer position="top-right" theme="colored" />
      <Navbar setComplaintTrue={setComplaintTrue} />
      <MakeComplaint complaintTrue={complaintTrue} setComplaintTrue={setComplaintTrue}/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/update/:id"  element={<Update/>} />
        <Route path="/success"  element={userAccount ? <Success/>: <Home/>} />
        <Route path="/login"  element={userAccount ? <Home/>: <Login/>} />
        <Route path="/register"  element={userAccount ? <Home/>: <Register/>} />
        <Route path="/categories"  element={<Category/>} />
        <Route path="/category/:id"  element={<AllProducts/>} />
        <Route path="/products"  element={<AllProducts/>} />
        <Route path="/products/:id"  element={<SingleProduct/>} />
        <Route path="*"  element={<Erorr/>} />
        <Route path="load"  element={<Loader2 width="100px" height="100px"/>} />
      </Routes>
    </Router>
  );
};

export default App;

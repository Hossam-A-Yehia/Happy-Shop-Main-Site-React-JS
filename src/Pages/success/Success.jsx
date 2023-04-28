import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../../Api/requestMethod";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const cart = location.state.cartProducts;

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const createOrder = async () => {
      try {
        await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
        });
      } catch {}
    };
    createOrder();
  }, [cart, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="fw-bold fs-4 my-3">عملية شراء ناحجة سنتواصل معك قريبا , شكرا</span>
      <Link to="/">
      <button className="btn btn-success">الرجوع الي الصفحة الرئيسية</button>
      </Link>
    </div>
  );
};

export default Success;

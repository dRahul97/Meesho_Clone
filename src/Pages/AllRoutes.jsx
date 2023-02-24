import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
import Productpage from "./Productpage";
import SingleProductPage from "./SingleProductPage";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignIn from "./SignIn";
import Adminpanel from "./Adminpanel";
import PaymentPage from "./PaymentPage";
import LoginAdmin from "../Pages/Admin Page/LoginAdmin";
import AdminAdd from "./Admin Page/AdminAdd";
import AdminDash from "./Admin Page/AdminDash";
import AdminUpdate from "./Admin Page/AdminUpdate";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Productpage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/Admin" element={<LoginAdmin />} />
      <Route path="/AdminAdd" element={<AdminAdd />} />
      <Route path="/AdminDashboard" element={<AdminDash />} />
      <Route path="/AdminUpdate" element={<AdminUpdate />} />
    </Routes>
  );
};

export default AllRoutes;

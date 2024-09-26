import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PNF from "../PNF/PNF";
import ProductDetails from "../Product/ProductDetails";
import Registrationuser from "../UserAuth/Registrationuser";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import ProductList from "../Product/ProductList";
import Loginuser from "../UserAuth/Loginuser";
import AddProduct from "../Product/AddProduct";
import UserProfile from "../UserAuth/UserProfile";
import AdminLogin from "../AdminDashboard/AdminLogin";
import Cart from "../Cart/Cart";
import ProtectedRoutes, { ProtectedRoutes2 } from "../../auth/auth";
import Error from "../Error/Error";
import Error2 from "../Error/Error2";
import EditProduct from "../Product/EditProduct";
import AllProduct from "../Product/AllProduct";

const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<PNF />} />
          <Route path="error" element={<Error />} />
          <Route path="error2" element={<Error2 />} />

          <Route path="productdetails/:id" element={<ProductDetails />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="allproduct" element={<AllProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="editproduct/:id" element={<EditProduct />} />
          {/* <Route path="cart" element={<Cart />} /> */}

          {/* <Route path="admindashboard/:id" element={<AdminDashboard />} /> */}
          <Route path="adminlogin" element={<AdminLogin />} />

          <Route path="loginuser" element={<Loginuser />} />
          <Route path="registrationuser" element={<Registrationuser />} />
          {/* <Route path="userprofile/:id" element={<UserProfile />} /> */}

          <Route element={<ProtectedRoutes />}>
          <Route path="userprofile/:id" element={<UserProfile />} />
          <Route path="cart/:id" element={<Cart />} />

          </Route>

          <Route element={<ProtectedRoutes2 />}>
          <Route path="admindashboard/:id" element={<AdminDashboard />} />
          </Route>
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routing;

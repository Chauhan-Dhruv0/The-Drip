import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetail from "./components/Products/ProductDetail";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetailPage from "./pages/OrderDetailPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Support";
import TermsAndConditions from "./pages/TermsAndConditions";
import MyOrderPage from "./pages/MyOrderPage";
import ChangePassword from "./pages/ChangePassword";
import AdmitLayout from "./components/Admin/AdmitLayout";
import AdminHomepage from "./components/Admin/AdminHomepage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProduct from "./components/Admin/EditProduct";
import OrderManagement from "./components/Admin/OrderManagement";
import { CartProvider } from "./components/Cart/CartContext";

import {Provider} from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./components/Common/ProtectedRoute";


function App({ addToCart }) {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route
              path="product/:id"
              element={<ProductDetail addToCart={addToCart} />}
            />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="order/:id" element={<OrderDetailPage />} />
            <Route path="my-orders" element={<MyOrderPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="Terms-conditions" element={<TermsAndConditions />} />
            <Route path="/change-password" element={<ChangePassword />} />


          </Route>

          {/* Admit Layout  */}

          <Route path="/admin" element={
            <ProtectedRoute role="admin">
            <AdmitLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminHomepage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProduct />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

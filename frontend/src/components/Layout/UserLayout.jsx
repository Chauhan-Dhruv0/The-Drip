import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
// import HeroContent from "../Layout/Home/HeroSection";
// import SalePage from "../Layout/Home/Salepage";

function UserLayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main contant */}
      <main>
        <Outlet/>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default UserLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Hero from "../components/Banner/Hero";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20">
        <Hero></Hero>
      </div>
      <div className=" pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;

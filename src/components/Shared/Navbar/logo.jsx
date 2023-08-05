import React from "react";
import logoimg from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const logo = () => {
  return (
    <Link to="/">
      <img
        src={logoimg}
        alt="logo"
        width="100"
        height="100"
        // className="hidden sm:block"
      />
    </Link>
  );
};

export default logo;

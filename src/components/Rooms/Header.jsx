import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="  Avaiable in this Category"
        subtitle="Please Select Other Categories"
      ></Heading>

      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://i.ibb.co/dtbPnR9/ashraful.jpg"
          alt="headerimg"
        />
      </div>
    </>
  );
};

export default Header;

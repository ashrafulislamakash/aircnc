import React from "react";
import Container from "../Shared/Container";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CTA = () => {
  return (
    <div className="bg-green-500 py-24">
      <Container>
        <div className=" text-center mx-auto   ">
          <h2 className="text-4xl md:text-6xl pb-2  ">
            {" "}
            Submit or Rent Venture Home
          </h2>
          <p>
            Publish the best of your client testimonials and let the world know
            what a great agent or real estate agency you are. Testimonials build
            trust.
          </p>

          <div className=" grid md:flex justify-center pt-10 gap-6 py-4 mx-auto">
            <Link to="/signup">
              <button className="py-4 px-12 bg-white text-green-500 rounded-md text-xl font-semibold hover:bg-black">
                Submit Home
              </button>
            </Link>
            <Link to="/">
              <button className="py-4 px-12 bg-white text-green-500 rounded-md text-xl font-semibold hover:bg-black">
                Rent Home
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;

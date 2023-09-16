import React from "react";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";
import CTA from "../../components/CTA/CTA";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Categories></Categories>
      <Rooms></Rooms>

      <div className="py-24">
        <CTA></CTA>
      </div>

      <Review></Review>
    </div>
  );
};

export default Home;

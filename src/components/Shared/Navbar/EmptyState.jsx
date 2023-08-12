import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const EmptyState = ({ message, address, label }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <Player
        autoplay
        loop
        src="https://lottie.host/72955be8-5b37-4604-80cf-c24f5fd493f3/umya2IcYa8.json"
        style={{ height: "200px", width: "100%" }}
      >
        {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
      </Player>
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <Button label={label} />
      </Link>
    </div>
  );
};

export default EmptyState;

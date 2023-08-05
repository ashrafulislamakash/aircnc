import React, { useContext } from "react";
import Avatarimg from "../../assets/avatar.png";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
const Avatar = () => {
  // const { user } = useContext(AuthContext);
  return (
    <Link to="/">
      <img
        // src={user && user.photoURL ? user.photoURL : Avatarimg}
        src={Avatarimg}
        alt="Avatarimg"
        width="30"
        height="30"
        className="rounded-full"
        // className="hidden sm:block"
      />
    </Link>
  );
};

export default Avatar;

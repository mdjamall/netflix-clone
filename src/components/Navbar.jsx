import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute flex  justify-between items-center p-4 z-50 w-full">
      <Link to={"/"}>
        <h1 className="uppercase font-bebas-neue tracking-wider md:text-6xl text-4xl text-[rgb(229,9,20)] cursor-pointer md:ml-10">
          netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to={"/profile"}>
            <button className="capitalize px-6 py-2 pr-2">profile</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="capitalize px-6 py-2 bg-red-600 rounded"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="capitalize px-6 py-2 pr-2">login</button>
          </Link>
          <Link to={"/signup"}>
            <button className="capitalize px-6 py-2 bg-red-600 rounded">
              signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

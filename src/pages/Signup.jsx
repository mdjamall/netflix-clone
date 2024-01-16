import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full">
      <img
        className="w-full absolute h-screen object-cover sm:block "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="///"
      />
      <div className="bg-black/70 w-full h-screen fixed top-0 left-0" />

      <div className=" fixed w-full px-4 py-24 z-20">
        <div className=" max-w-[450px] h-[600px] bg-black/80 mx-auto rounded-lg">
          <div className="max-w-[320px] mx-auto py-16 ">
            <h1 className="font-nsans-bold text-3xl">Signup</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" p-2 my-3 border bg-gray-950 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                className=" p-2 my-3 bg-transparent border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                autoComplete="current-password"
              />
              <button
                className=" py-2 bg-gradient-to-t
               from-red-600 to-red-500 my-6  rounded text-xl hover:bg-red-700 hover:scale-105 duration-200"
              >
                Signup
              </button>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <p className="flex items-center">
                  <input
                    checked={rememberLogin}
                    onChange={(e) => setRememberLogin(!rememberLogin)}
                    className="mr-1"
                    type="checkbox"
                  />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="my-4  ">
                <span className="text-gray-400 mr-2">
                  are you a Subscriber?
                </span>
                <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

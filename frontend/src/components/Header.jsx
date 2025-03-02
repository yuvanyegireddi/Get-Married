import React from "react";
import Logo from "../assets/header_photo.jpg";
import useStore from "../store/store";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useStore();
  return (
    <>
      <div className="hero bg-cusLightBlue min-h-screen pt-28">
        <div className="hero-content flex flex-col items-center space-y-6 md:flex-row md:space-x-4 md:space-y-0">
          <img src={Logo} className="w-3/4 sm:w-2/3 md:w-1/2 h-auto rounded-lg" />
          <div className="text-center md:text-left mt-6 md:mt-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              GET<span className="text-customBlue">MARRIED!</span>
            </h1>
            <p className="py-6 text-lg sm:text-xl md:text-2xl font-robotic">
              Find your soulmate with GetMarried—where genuine connections lead to lasting love and happiness.
            </p>
            {(localStorage.getItem("jwt") && user.isProfile) ? (
              <div className="flex justify-center md:justify-start">
                <button className="btn bg-blue-600 hover:bg-transparent border-none">
                  View Profile
                </button>
              </div>
            ) : (
              ""
            )}

            {(localStorage.getItem("jwt") && !user.isProfile) ? (
              <div className="flex justify-center md:justify-start pt-2">
                <Link to="/createProfile">
                  <button className="btn bg-blue-600 hover:bg-transparent border-none">
                    Create Profile
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

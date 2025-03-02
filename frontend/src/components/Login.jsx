import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../store/store";
import { FaUser, FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [userdetails, setUserDetails] = useState({ email: "", password: "" });

  const handleUserChanges = (e) => {
    setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: userdetails.email,
        password: userdetails.password,
      });

      if (!data.success) {
        toast.error("Invalid email or password");
        return;
      }

      setUser(data.user);
      localStorage.setItem("jwt", data.token);
      toast.success("Login successful!");
      navigate("/user");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={handleUserChanges}
                placeholder="Enter your email"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={handleUserChanges}
                placeholder="Enter your password"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
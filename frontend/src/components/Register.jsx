import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/auth/register", { user });

      if (data.success) {
        localStorage.setItem("email", data.email);
        toast.success('Registration successful!');
        navigate("/verify");
        return;
      } else {
        toast.error('Registration failed.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4 relative">
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                onChange={handleChanges}
                placeholder="Enter your full name"
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
              <span className="text-base label-text">Phone</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="phone"
                onChange={handleChanges}
                placeholder="Enter your phone number"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaPhone className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="mb-4 relative">
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                onChange={handleChanges}
                placeholder="Enter your email"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-400" />
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
                onChange={handleChanges}
                placeholder="Enter your password"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="mb-6 relative">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChanges}
                placeholder="Confirm your password"
                className="w-full input input-bordered h-10 pl-10"
                required
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
            </div>
          </div>

          <div className="pb-2">
            <Link to="/login" className="hover:text-blue-500">Already have an account? Login</Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
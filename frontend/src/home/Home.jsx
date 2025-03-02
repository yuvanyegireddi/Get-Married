import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/user");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
};

export default Home;

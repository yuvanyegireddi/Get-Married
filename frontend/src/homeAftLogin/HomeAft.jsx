import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarAft from "../components/NavbarAft";
import axios from "axios";
import useStore from "../store/store";
import { toast } from "react-toastify";

function HomeAft() {
  const { setUser } = useStore();
  const verify = async () => {
    try {
      const { data } = await axios.get(
        "/api/auth/verify",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      console.log(data);

      if (data?.success) {
        setUser(data?.user);
      }
    } catch (err) {
      console.log("Error in verification : ", err);
    }
  };

  useEffect(() => {
    verify();
  }, []);
  return (
    <>
      <NavbarAft />
      <Header />
      <Footer />
    </>
  );
}

export default HomeAft;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExploreProfiles() {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const { data } = await axios.post(
        "/api/profile/viewProfiles",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      console.log(data);
      setProfiles(data);
      toast.success('Profiles fetched successfully!');
    } catch (error) {
      console.log("Error in fetchProfiles: ", error);
      toast.error('Failed to fetch profiles.');
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="bg-[#ECDFD0] mt-16 min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-4">Explore Profiles</h1>
      <div className="flex flex-col gap-4">
        {profiles.length > 0 ? (
          profiles.map((profile, index) => (
            <Profile profile={profile} key={index} type={"profile"} />
          ))
        ) : (
          <p>No profiles available.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ExploreProfiles;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaCalendar, FaMapMarkerAlt, FaCamera, FaUsers, FaClock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        heightFeet: "",
        heightInches: "",
        religion: "",
        gender: "",
        city: "",
        state: "",
        country: "",
        contact: "",
        maritalStatus: "",
        community: "",
        community_preference: "",
        timeOfBirth: "",
        placeOfBirth: "",
    });
    const [photos, setPhotos] = useState([]);

    const handleChanges = (e) => {
        setProfile({ 
            ...profile, 
            [e.target.name]: e.target.value 
        });
    };

    const handlePhotoChange = (e) => {
        setPhotos(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profileData', JSON.stringify(profile));
            for (let i = 0; i < photos.length; i++) {
                formData.append('photos', photos[i]);
            }
            const { data } = await axios.post("/api/profile/createProfile", 
                formData, 
                { 
                    headers: { 
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("jwt")}` 
                    } 
                }
            );
            if (data.success) {
                toast.success('Profile created successfully!');
                navigate("/profiles");
            } else {
                toast.error('Failed to create profile.');
            }
        } catch (error) {
            toast.error('Failed to create profile.');
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-gray-100" 
            style={{ backgroundColor: "#ECDFD0", padding: "20px", paddingTop: "70px" }}
        >
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Create Profile
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <FaUser className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="firstName" 
                            onChange={handleChanges} 
                            placeholder="First Name" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUser className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="lastName" 
                            onChange={handleChanges} 
                            placeholder="Last Name" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaCalendar className="mr-2 text-gray-600" />
                        <input 
                            type="date" 
                            name="dob" 
                            onChange={handleChanges} 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Height (feet & inches)
                            </span>
                        </label>
                        <div className="flex space-x-4">
                            <input 
                                type="number" 
                                name="heightFeet" 
                                onChange={handleChanges} 
                                placeholder="Feet" 
                                className="w-1/2 input input-bordered h-10" 
                                required 
                            />
                            <input 
                                type="number" 
                                name="heightInches" 
                                onChange={handleChanges} 
                                placeholder="Inches" 
                                className="w-1/2 input input-bordered h-10" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUsers className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="religion" 
                            onChange={handleChanges} 
                            placeholder="Religion" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUsers className="mr-2 text-gray-600" />
                        <select 
                            name="gender" 
                            onChange={handleChanges} 
                            className="w-full input input-bordered h-10" 
                            required
                        >
                            <option value="" disabled selected>
                                Select your gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="city" 
                            onChange={handleChanges} 
                            placeholder="City" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="state" 
                            onChange={handleChanges} 
                            placeholder="State" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="country" 
                            onChange={handleChanges} 
                            placeholder="Country" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaPhone className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="contact" 
                            onChange={handleChanges} 
                            placeholder="Contact Number" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUsers className="mr-2 text-gray-600" />
                        <select 
                            name="maritalStatus" 
                            onChange={handleChanges} 
                            className="w-full input input-bordered h-10" 
                            required
                        >
                            <option value="" disabled selected>
                                Select marital status
                            </option>
                            <option value="never married">Never Married</option>
                            <option value="separated">Separated</option>
                            <option value="divorced">Divorced</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUsers className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="community" 
                            onChange={handleChanges} 
                            placeholder="Community" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaUsers className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="community_preference" 
                            onChange={handleChanges} 
                            placeholder="Community Preference" 
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaCamera className="mr-2 text-gray-600" />
                        <input 
                            type="file" 
                            name="photos" 
                            onChange={handlePhotoChange} 
                            multiple
                            className="w-full input input-bordered h-10" 
                            required 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaClock className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="timeOfBirth" 
                            onChange={handleChanges} 
                            placeholder="Time of Birth (Optional)" 
                            className="w-full input input-bordered h-10" 
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-600" />
                        <input 
                            type="text" 
                            name="placeOfBirth" 
                            onChange={handleChanges} 
                            placeholder="Place of Birth (Optional)" 
                            className="w-full input input-bordered h-10" 
                        />
                    </div>
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Create Profile
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateProfile;
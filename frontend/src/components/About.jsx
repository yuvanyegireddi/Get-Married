import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="min-h-screen pt-[70px]">
      <Navbar />
      <div className="p-6 bg-gradient-to-r from-blue-200 to-purple-300 shadow-lg rounded-lg max-w-4xl mx-auto my-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h2>
        <p className="mb-6 text-lg text-gray-700 text-center">
          Welcome to GetMarried! We are dedicated to helping you find your perfect match. Our platform is designed to connect individuals based on mutual interests and preferences.
        </p>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h3>
        <p className="mb-6 text-gray-600">
          Our mission is to simplify the matchmaking process, ensuring a seamless experience for our users. We believe that everyone deserves a chance at love, and we strive to provide the tools to help you find it.
        </p>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Why Choose Us?</h3>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>🎯 Personalized matchmaking based on your preferences</li>
          <li>🔒 Secure and private communication channels</li>
          <li>🌟 User-friendly interface</li>
        </ul>
        <p className="text-lg text-gray-700 text-center">
          Join us today and take the first step towards finding your perfect match!
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component

const HowItWorks = () => {
  return (
    <div className='min-h-screen pt-[70px]'>
      <Navbar />
      <div className="p-6 bg-gradient-to-r from-green-200 to-teal-300 shadow-lg rounded-lg max-w-4xl mx-auto my-8 pt-24">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">How It Works</h2>
        <p className="mb-6 text-lg text-gray-700 text-center">
          At GetMarried, we have simplified the matchmaking process into a few easy steps:
        </p>
        <ol className="list-decimal list-inside mb-6 text-gray-600">
          <li>
            <strong>Sign Up:</strong> Create an account and complete your profile with your preferences.
          </li>
          <li>
            <strong>Browse Profiles:</strong> Explore profiles of other users that match your criteria.
          </li>
          <li>
            <strong>Show Interest:</strong> If you find someone interesting, show your interest through our platform.
          </li>
          <li>
            <strong>Connect:</strong> If both users show interest, you can start chatting and getting to know each other.
          </li>
        </ol>
        <p className="text-lg text-gray-700 text-center">
          Our goal is to make the matchmaking experience as enjoyable and efficient as possible.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;

import React, { useState } from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = 'udaykota4u@gmail.com';
    const subject = `${name} from GetMarried`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen pt-[70px]">
      <Navbar />
      <div className="p-6 bg-gradient-to-r from-purple-300 to-blue-300 shadow-lg rounded-lg max-w-md mx-auto mt-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
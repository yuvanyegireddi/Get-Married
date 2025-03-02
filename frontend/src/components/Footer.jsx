import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">GETMARRIED</h1>
          <p className="mt-2">YOUR PERFECT MATCH AWAITS!</p>
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between text-base">
        <div className="mb-4 md:mb-0 md:mr-10"> {/* Added margin-right for spacing */}
          <h6 className="footer-title font-semibold">Company</h6>
          <div className="flex flex-col">
            <Link to="/about" className="link link-hover mb-2">About Us</Link>
            <Link to="/how-it-works" className="link link-hover mb-2">How It Works</Link>
            <Link to="/contact-us" className="link link-hover mb-2">Contact Us</Link>
            <a className="link link-hover">Jobs</a>
          </div>
        </div>
        
        <div className="mb-4 md:mb-0">
          <h6 className="footer-title font-semibold">Legal</h6>
          <div className="flex flex-col">
            <a className="link link-hover mb-2">Terms of Use</a>
            <a className="link link-hover mb-2">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} GetMarried. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

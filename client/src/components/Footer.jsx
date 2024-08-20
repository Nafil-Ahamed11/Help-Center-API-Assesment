import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f text-white hover:text-gray-400"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter text-white hover:text-gray-400"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in text-white hover:text-gray-400"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram text-white hover:text-gray-400"></i>
          </a>
        </div>

        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

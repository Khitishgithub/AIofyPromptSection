"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Slogan Container */}
        <div className="flex items-center space-x-4 flex-grow">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/images/aiofyLogo.png"
              width={150}
              height={1}
              alt="aiofy logo"
              className="object-contain max-w-[80px] lg:max-w-[150px]"
            />
          </div>

          <div className="">
            <Image
              src="/images/slogan.jpg"
              width={400}
              height={80}
              alt="Making Your Business AI-Enabled"
              className="object-contain max-w-[170px] lg:max-w-[400px]"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-blue-900">
            Home
          </a>
          <a href="/contact" className="text-blue-900">
            Contact
          </a>
          <button
            onClick={scrollToServices}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-2 px-6 rounded-md"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 top-3 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-900 py-2 border-b border-gray-100 hover:border-yellow-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-gray-900 py-2 border-b border-gray-100 hover:border-yellow-400 transition-colors duration-300"
            >
              Contact
            </a>
            <div className="pt-4">
              <button
                onClick={scrollToServices}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-md w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"// components/Header.js
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <span className="flex items-center cursor-pointer">
              <Image src={"/images/logo2.png"} className=" " alt="logo" width={120} height={50}/>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              Home
            </span>
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              About
            </span>
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              Team
            </span>
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              Traction
            </span>
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              Vendors
            </span>
            <span className="text-deep-brown hover:text-primary transition duration-300 cursor-pointer">
              Contact
            </span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-deep-brown focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} pb-4`}
        >
          <div className="flex flex-col space-y-3">
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              Home
            </span>
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              About
            </span>
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              Team
            </span>
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              Traction
            </span>
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              Vendors
            </span>
            <span className="text-deep-brown hover:text-primary py-2 transition duration-300 cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

// Navigation items
const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/teams" },
  { label: "Traction", href: "/#traction" },
  { label: "Vendors", href: "/vendors" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <span className="flex items-center cursor-pointer">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={120}
                height={50}
              />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-deep-brown hover:text-primary transition duration-300"
              >
                {item.label}
              </a>
            ))}
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-deep-brown hover:text-primary py-2 transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="bg-deep-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Kasuana Description + Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Kasuana Trade Network
            </h3>
            <p className="text-white opacity-80 mb-4">
              "Your Everyday Market, Built for You, Owned by You"
            </p>
            <div className="flex space-x-4">
              <a
                href="https://whatsapp.com/channel/0029Vb5wOq335fLyhOGwyI0S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-yellow hover:text-white transition duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/kasuanatradenetwork?igsh=MTc2azI2ZnN2dWg5bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-yellow hover:text-white transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://x.com/Kasuanatradenet?t=qvZbgYC9B3awhYVdoPLa9w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-yellow hover:text-white transition duration-300"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576113337427"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-yellow hover:text-white transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@kasuanatradenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-yellow hover:text-white transition duration-300"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#traction"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/#become-a-vendors"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Vendor Form
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://chat.whatsapp.com/LuXKum1nuDhLrDS2JUqt5y?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  WhatsApp Community
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kasuanatradenetwork?igsh=MTc2azI2ZnN2dWg5bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Kasuanatradenet?t=qvZbgYC9B3awhYVdoPLa9w&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576113337427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@kasuanatradenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/kasuanatradenetwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Subscribe
            </h3>
            <p className="text-white opacity-80 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-soft-yellow text-white hover:text-deep-brown px-4 py-2 rounded-r-md transition duration-300"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white opacity-80 text-sm mb-4 md:mb-0">
              © 2025 Kasuana Trade Network. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

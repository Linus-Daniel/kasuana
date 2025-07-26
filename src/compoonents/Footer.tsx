// components/Footer.js
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
          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Kasuana Trade Network
            </h3>
            <p className="text-white opacity-80 mb-4">
              "Your Everyday Market, Built for You, Owned by You"
            </p>
            <div className="flex space-x-4">
              <span className="text-soft-yellow hover:text-white transition duration-300 cursor-pointer">
                <FaWhatsapp className="text-xl" />
              </span>
              <span className="text-soft-yellow hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram className="text-xl" />
              </span>
              <span className="text-soft-yellow hover:text-white transition duration-300 cursor-pointer">
                <FaXTwitter className="text-xl" />
              </span>
              <span className="text-soft-yellow hover:text-white transition duration-300 cursor-pointer">
                <FaFacebook className="text-xl" />
              </span>
              <span className="text-soft-yellow hover:text-white transition duration-300 cursor-pointer">
                <FaYoutube className="text-xl" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Home
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  About
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Team
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Community
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Vendor Form
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Contact
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-soft-yellow">
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  WhatsApp Channel
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Instagram
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Twitter (X)
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  Facebook
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  YouTube
                </span>
              </li>
              <li>
                <span className="text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer">
                  LinkedIn
                </span>
              </li>
            </ul>
          </div>

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

        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white opacity-80 text-sm mb-4 md:mb-0">
              © 2025 Kasuana Trade Network. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300 cursor-pointer">
                Terms of Use
              </span>
              <span className="text-white opacity-80 hover:opacity-100 text-sm transition duration-300 cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

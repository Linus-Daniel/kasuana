"use client";

import {
  FaEnvelope,
  FaWhatsapp,
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-custom mb-12">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-beige rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-deep-brown mb-6">
                Send Us a Message
              </h3>
              <form id="contact-form">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-olive-green text-white rounded-full font-medium hover:bg-deep-brown transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-semibold text-deep-brown mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center mr-4">
                      <FaEnvelope className="text-deep-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-brown">Email</h4>
                      <p className="text-gray-700">
                        info@kasuanatradenetwork.com
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Community */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center mr-4">
                      <FaWhatsapp className="text-deep-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-brown">
                        WhatsApp
                      </h4>
                      <a
                        href="https://chat.whatsapp.com/LuXKum1nuDhLrDS2JUqt5y?mode=ac_t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-olive-green text-white rounded-full text-sm mt-1 hover:bg-deep-brown transition duration-300"
                      >
                        <FaWhatsapp className="mr-2" />
                        Join Community
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center mr-4">
                      <FaLocationDot className="text-deep-brown" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-brown">
                        Location
                      </h4>
                      <p className="text-gray-700">
                        Bauchi, Bauchi state, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-deep-brown">Socials</h4>
                    <div className="flex flex-wrap gap-4 text-xl text-deep-brown">
                      <a
                        href="https://www.facebook.com/profile.php?id=61576113337427"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://x.com/Kasuanatradenet?t=qvZbgYC9B3awhYVdoPLa9w&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaXTwitter />
                      </a>
                      <a
                        href="https://www.instagram.com/kasuanatradenetwork?igsh=MTc2azI2ZnN2dWg5bQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/kasuanatradenetwork/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="https://whatsapp.com/channel/0029Vb5wOq335fLyhOGwyI0S"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment CTA */}
              <div className="bg-primary rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Interested in Investing?
                </h3>
                <p className="text-white opacity-90 mb-4">
                  We're open to partnerships and investments to scale our impact
                  across Africa.
                </p>
                <a
                  href="mailto:info@kasuanatradenetwork.com"
                  className="inline-block px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-soft-yellow transition duration-300"
                >
                  Email Our Investment Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

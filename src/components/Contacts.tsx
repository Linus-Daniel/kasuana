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
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("type", "contact");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to send message",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred while sending",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-custom mb-12">
            Get In Touch
          </h2>

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-md ${
                submitStatus.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-beige rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-deep-brown mb-6">
                Send Us a Message
              </h3>
              <form id="contact-form" onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-olive-green text-white rounded-full font-medium hover:bg-deep-brown transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                        href="https://wa.me/message/DX53H2HA6P7OC1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-olive-green text-white rounded-full text-sm mt-1 hover:bg-deep-brown transition duration-300"
                      >
                        <FaWhatsapp className="mr-2" />
                        Chat with us
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

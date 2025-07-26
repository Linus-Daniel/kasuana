"use client";

import { useState } from "react";

export default function BecomeVendorSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    institution: "",
    businessType: "",
    businessName: "",
    flyer: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API or Firebase)
    console.log(formData);
  };

  return (
    <section id="become-vendor" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Join the Next Generation of African Vendors
          </h2>
          <p className="text-lg text-deep-brown mb-8 text-center">
            Become part of our growing community of entrepreneurs and gain
            visibility for your business. It's free to join!
          </p>

          <div className="bg-beige rounded-lg shadow-md p-8">
            <form id="vendor-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    School / Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-deep-brown border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select business type</option>
                    <option value="food">Food &amp; Beverages</option>
                    <option value="fashion">Fashion &amp; Clothing</option>
                    <option value="tech">Technology</option>
                    <option value="beauty">Beauty &amp; Skincare</option>
                    <option value="crafts">Arts &amp; Crafts</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="flyer"
                    className="block text-deep-brown font-medium mb-2"
                  >
                    Upload Flyer (optional)
                  </label>
                  <input
                    type="file"
                    id="flyer"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-deep-brown transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

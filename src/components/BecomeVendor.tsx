"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface VendorFormData {
  fullName: string;
  phone: string;
  institution: string;
  businessType: string;
  businessName: string;
  flyer: File | null;
}

export default function BecomeVendorSection() {
  const [formData, setFormData] = useState<VendorFormData>({
    fullName: "",
    phone: "",
    institution: "",
    businessType: "",
    businessName: "",
    flyer: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Submit to API
  };

  return (
    <section id="become-a-vendor" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-custom mb-8">
            Join the Next Generation of African Vendors
          </h2>
          <p className="text-lg text-deep-brown mb-8 text-center">
            Become part of our growing community of entrepreneurs and gain
            visibility for your business. It&apos;s free to join!
          </p>

          <div className="bg-beige rounded-lg shadow-md p-8">
            <form id="vendor-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { id: "fullName", label: "Full Name", type: "text" },
                  {
                    id: "phone",
                    label: "Phone / WhatsApp Number",
                    type: "tel",
                  },
                  {
                    id: "institution",
                    label: "School / Institution (optional)",
                    type: "text",
                  },
                  { id: "businessName", label: "Business Name", type: "text" },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-deep-brown font-medium mb-2"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={(formData as any)[id]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}

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

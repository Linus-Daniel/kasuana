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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("type", "vendor");
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("institution", formData.institution);
      formDataToSend.append("businessType", formData.businessType);
      formDataToSend.append("businessName", formData.businessName);
      if (formData.flyer) {
        formDataToSend.append("flyer", formData.flyer);
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Application submitted successfully!",
        });
        setFormData({
          fullName: "",
          phone: "",
          institution: "",
          businessType: "",
          businessName: "",
          flyer: null,
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Failed to submit application",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred while submitting",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                      required={id !== "institution"}
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
                    required
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
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-deep-brown transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

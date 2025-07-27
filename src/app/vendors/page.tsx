// app/vendors/page.tsx
"use client";
import Image from "next/image";
import api from "@/lib/axiosInstance";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface Vendor {
  id: string;
  name: string;
  description: string;
  image: string;
  verified: boolean;
  address: string;
  phone: string;
  category: string;
}

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await api.get("/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-custom mb-12">
          Our Verified Vendors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-64 relative">
                <Image
                  fill
                  src={vendor.image}
                  alt={vendor.name}
                  className="object-cover"
                />
                {vendor.verified && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-deep-brown mb-2">
                  {vendor.name}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  {vendor.address}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaPhone className="mr-2" />
                  {vendor.phone}
                </div>
                <p className="text-gray-700 mb-4">{vendor.description}</p>
                <div className="flex justify-between">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-deep-brown transition">
                    View Products
                  </button>
                  <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    <FaWhatsapp className="mr-2" /> Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface Vendor {
  id: string;
  name: string;
  story: string;
  image: string;
  verified: boolean;
  email?: string;
  phone?: string;
  address?: string;
}

export default function VendorsPreview({ vendors }: { vendors: Vendor[] }) {
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedVendors = vendors.slice(0, 4);

  const openModal = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  return (
    <section id="vendors-preview" className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-custom">Featured Vendors</h2>
          <Link href="/vendors" className="text-primary hover:underline">
            View All Vendors →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  className="object-contain"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                {vendor.verified && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-deep-brown mb-2">
                  {vendor.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {vendor.story}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(vendor)}
                    className="text-sm text-primary hover:underline"
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/${vendor.phone
                      ?.replace(/\D/g, "")
                      .slice(-10)}`}
                    className="flex items-center text-sm text-olive-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-1" /> Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Details Modal */}
      {isModalOpen && selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold text-deep-brown">
                {selectedVendor.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-4">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={selectedVendor.image}
                  alt={selectedVendor.name}
                  className="object-contain rounded-lg"
                  fill
                  sizes="100vw"
                />
                {selectedVendor.verified && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">About</h4>
                  <p className="text-gray-600">{selectedVendor.story}</p>
                </div>

                {selectedVendor.email && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">{selectedVendor.email}</p>
                  </div>
                )}

                {selectedVendor.phone && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">{selectedVendor.phone}</p>
                  </div>
                )}

                {selectedVendor.address && (
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">{selectedVendor.address}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t p-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

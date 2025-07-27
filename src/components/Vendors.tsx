// components/VendorsPreview.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface Vendor {
  id: string;
  name: string;
  description: string;
  image: string;
  verified: boolean;
}

export default function VendorsPreview({ vendors }: { vendors: Vendor[] }) {
  const displayedVendors = vendors.slice(0, 4);

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
                  fill
                  src={vendor.image}
                  alt={vendor.name}
                  className="object-cover"
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
                  {vendor.description}
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-sm text-primary hover:underline">
                    View Details
                  </button>
                  <button className="flex items-center text-sm text-olive-green">
                    <FaWhatsapp className="mr-1" /> Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

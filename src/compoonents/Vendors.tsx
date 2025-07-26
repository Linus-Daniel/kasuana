// components/Vendors.js
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Vendors() {
  return (
    <section id="vendors" className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Verified Vendors
        </h2>
        <p className="text-lg text-deep-brown mb-12 text-center">
          Browse trusted vendors within the Kasuana community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vendor 1 */}
          <div
            id="vendor-1"
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-soft-yellow">
              <Image
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt="African skincare products display with natural ingredients, warm lighting"
                width={400}
                height={192}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-deep-brown">
                  Skylet Elixirs
                </h3>
                <div className="bg-olive-green text-white text-xs px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Natural skincare products made from African ingredients.
              </p>
              <div className="flex justify-between">
                <span className="text-primary font-medium hover:text-deep-brown transition duration-300 cursor-pointer">
                  View Story
                </span>
                <span className="text-olive-green font-medium hover:text-deep-brown transition duration-300 flex items-center cursor-pointer">
                  <FaWhatsapp className="mr-1" /> Contact
                </span>
              </div>
            </div>
          </div>

          {/* Vendor 2 */}
          <div
            id="vendor-2"
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-soft-yellow">
              <Image
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt="Used laptops and tech repair shop in African university setting"
                width={400}
                height={192}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-deep-brown">
                  Redwood Laptops
                </h3>
                <div className="bg-olive-green text-white text-xs px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Quality used laptops and tech repair for students.
              </p>
              <div className="flex justify-between">
                <span className="text-primary font-medium hover:text-deep-brown transition duration-300 cursor-pointer">
                  View Story
                </span>
                <span className="text-olive-green font-medium hover:text-deep-brown transition duration-300 flex items-center cursor-pointer">
                  <FaWhatsapp className="mr-1" /> Contact
                </span>
              </div>
            </div>
          </div>

          {/* Vendor 3 */}
          <div
            id="vendor-3"
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-soft-yellow">
              <Image
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/192213a3dd-173a6ece925193aeceb5.png"
                alt="African fashion designer with colorful fabrics and clothing items"
                width={400}
                height={192}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-deep-brown">
                  ThreadWorks
                </h3>
                <div className="bg-olive-green text-white text-xs px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Custom clothing and fashion accessories for all occasions.
              </p>
              <div className="flex justify-between">
                <span className="text-primary font-medium hover:text-deep-brown transition duration-300 cursor-pointer">
                  View Story
                </span>
                <span className="text-olive-green font-medium hover:text-deep-brown transition duration-300 flex items-center cursor-pointer">
                  <FaWhatsapp className="mr-1" /> Contact
                </span>
              </div>
            </div>
          </div>

          {/* Vendor 4 */}
          <div
            id="vendor-4"
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-soft-yellow">
              <Image
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt="African fashion designer studio with sewing materials and elegant clothing"
                width={400}
                height={192}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-deep-brown">
                  Feenah's Ateliers
                </h3>
                <div className="bg-olive-green text-white text-xs px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Luxury fashion designs and tailoring services.
              </p>
              <div className="flex justify-between">
                <span className="text-primary font-medium hover:text-deep-brown transition duration-300 cursor-pointer">
                  View Story
                </span>
                <span className="text-olive-green font-medium hover:text-deep-brown transition duration-300 flex items-center cursor-pointer">
                  <FaWhatsapp className="mr-1" /> Contact
                </span>
              </div>
            </div>
          </div>

          {/* Vendor 5 */}
          <div
            id="vendor-5"
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-soft-yellow">
              <Image
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                alt="Traditional Nigerian food vendor with tombrown and local dishes"
                width={400}
                height={192}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-deep-brown">
                  10:10 Tombrown
                </h3>
                <div className="bg-olive-green text-white text-xs px-2 py-1 rounded-full">
                  Verified
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Delicious traditional Nigerian meals and snacks for students.
              </p>
              <div className="flex justify-between">
                <span className="text-primary font-medium hover:text-deep-brown transition duration-300 cursor-pointer">
                  View Story
                </span>
                <span className="text-olive-green font-medium hover:text-deep-brown transition duration-300 flex items-center cursor-pointer">
                  <FaWhatsapp className="mr-1" /> Contact
                </span>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
            <span className="inline-block px-8 py-3 bg-deep-brown text-white rounded-full font-medium hover:bg-primary transition duration-300 cursor-pointer">
              View All Vendors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

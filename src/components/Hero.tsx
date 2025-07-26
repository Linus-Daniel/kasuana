// components/Hero.js
"use client";
import { FaStore, FaUserPlus } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-beige h-[600px] flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-custom mb-4 leading-tight">
              Building Africa's Grassroots Trade Network
            </h1>
            <p className="text-deep-brown text-lg mb-8">
              Empowering local businesses with visibility and access through
              digital tools—bridging Africa's untapped markets with meaningful
              connections.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-deep-brown transition duration-300 flex items-center cursor-pointer"
              >
                <FaStore className="mr-2" /> Explore the Marketplace
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-olive-green text-white rounded-full font-medium hover:bg-deep-brown transition duration-300 flex items-center cursor-pointer"
              >
                <FaUserPlus className="mr-2" /> Join as a Vendor
              </motion.button>
            </div>
          </div>

          <div className="md:w-1/2 relative h-[400px] hidden md:block">
            <motion.div
              className="absolute left-1/2 top-10 w-2/3 -translate-x-1/2 rounded-xl shadow-2xl  z-30"
              style={{
                transformOrigin: "center bottom",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              initial={{ rotate: 0, y: 20 }}
              whileHover={{
                rotate: 0,
                y: 0,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              <Image
                src="/images/HeroImage.png"
                alt="African woman selling fruits"
                width={500}
                height={500}
                // className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

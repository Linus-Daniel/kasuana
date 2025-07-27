// components/Hero.js
"use client";
import { FaStore, FaUserPlus } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[600px] flex items-center overflow-hidden bg-beige md:bg-none"
    >
      {/* Mobile background image */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/images/HeroImage.png"
          alt="African marketplace background"
          fill
          className="object-contain "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from bg-beige/50 to-beige " />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-custom mb-4 leading-tight"
            >
              Building Africa's Grassroots Trade Network
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sm:text-deep-brown text-custom font-bold text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
            >
              Empowering local businesses with visibility and access through
              digital tools—bridging Africa's untapped markets with meaningful
              connections.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <motion.a
                href="https://chat.whatsapp.com/LuXKum1nuDhLrDS2JUqt5y?mode=ac_t"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-deep-brown transition duration-300 flex items-center cursor-pointer"
              >
                <FaStore className="mr-2" /> Explore the Marketplace
              </motion.a>
              <motion.a
                href="/#become-a-vendor"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-olive-green text-white rounded-full font-medium hover:bg-deep-brown transition duration-300 flex items-center cursor-pointer"
              >
                <FaUserPlus className="mr-2" /> Join as a Vendor
              </motion.a>
            </motion.div>
          </div>

          {/* Desktop image - hidden on mobile */}
          <div className="md:w-1/2 relative h-[400px] hidden md:block">
            <motion.div
              className="absolute left-1/2 top-10 w-2/3 -translate-x-1/2 rounded-xl shadow-2xl z-30"
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
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

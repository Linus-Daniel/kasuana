// components/WhyKasuana.js
import { FaEye, FaLink, FaHandPeace } from "react-icons/fa";

export default function WhyKasuana() {
  return (
    <section id="why-kasuana" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-deep-brown mb-12">
          Why Choose Kasuana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visibility */}
          <div
            id="feature-visibility"
            className="bg-soft-yellow rounded-lg p-6 text-center shadow-md transform hover:scale-105 transition duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
              <FaEye className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-deep-brown">
              Visibility
            </h3>
            <p className="text-gray-700">
              Your products deserve to be seen. We amplify your reach beyond
              your immediate circle.
            </p>
          </div>

          {/* Access */}
          <div
            id="feature-access"
            className="bg-olive-green rounded-lg p-6 text-center shadow-md transform hover:scale-105 transition duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-deep-brown rounded-full flex items-center justify-center mb-4">
              <FaLink className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Access</h3>
            <p className="text-white opacity-90">
              Connect with verified businesses across campuses and communities
              throughout Nigeria.
            </p>
          </div>

          {/* Simplicity */}
          <div
            id="feature-simplicity"
            className="bg-deep-brown rounded-lg p-6 text-center shadow-md transform hover:scale-105 transition duration-300"
          >
            <div className="w-16 h-16 mx-auto bg-soft-yellow rounded-full flex items-center justify-center mb-4">
              <FaHandPeace className="text-deep-brown text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Simplicity &amp; Cultural Inclusivity
            </h3>
            <p className="text-white opacity-90">
              Easy to use for all vendors—no matter how small or local your
              business is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

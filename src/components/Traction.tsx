import {
  FaWhatsapp,
  FaUsers,
  FaUsersViewfinder,
  FaLayerGroup,
  FaStar,
  FaTag,
  FaLightbulb,
} from "react-icons/fa6";

export default function TractionSection() {
  return (
    <section id="traction" className="py-16 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-custom mb-12">
          Our Progress So Far
        </h2>

        {/* Top Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div
            id="stat-1"
            className="bg-primary text-white rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-4xl font-bold mb-2">June 16</p>
            <p className="text-xl">2025</p>
            <p className="mt-2 text-white opacity-80">Launched</p>
          </div>
          <div
            id="stat-2"
            className="bg-olive-green text-white rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-4xl font-bold mb-2">10</p>
            <p className="mt-2 text-white opacity-80">Product Categories</p>
          </div>
          <div
            id="stat-3"
            className="bg-soft-yellow text-deep-brown rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-4xl font-bold mb-2">40+</p>
            <p className="mt-2">Verified Vendors</p>
          </div>
          <div
            id="stat-4"
            className="bg-deep-brown text-white rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-4xl font-bold mb-2">₦200,000+</p>
            <p className="mt-2 text-white opacity-80">
              Transactions in 3 weeks
            </p>
          </div>
        </div>

        {/* Social and Admin Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div
            id="stat-5"
            className="bg-white rounded-lg p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
            <p className="text-3xl font-bold text-deep-brown mb-2">100+</p>
            <p className="text-gray-700">WhatsApp Followers</p>
          </div>
          <div
            id="stat-6"
            className="bg-white rounded-lg p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-white text-xl" />
            </div>
            <p className="text-3xl font-bold text-deep-brown mb-2">5</p>
            <p className="text-gray-700">Team Admins</p>
          </div>
          <div
            id="stat-7"
            className="bg-white rounded-lg p-6 text-center shadow-md"
          >
            <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
              <FaUsersViewfinder className="text-white text-xl" />
            </div>
            <p className="text-3xl font-bold text-deep-brown mb-2">500+</p>
            <p className="text-gray-700">Community Reach</p>
          </div>
        </div>

        {/* WhatsApp Community Info */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
            How Our WhatsApp Community Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              {
                icon: <FaLayerGroup className="text-deep-brown" />,
                title: "Product Category Groups",
                desc: "Organized channels for Tech, Food, Skincare, and more",
              },
              {
                icon: <FaStar className="text-deep-brown" />,
                title: "Daily Spotlight Features",
                desc: "Highlighting exceptional vendors and products",
              },
              {
                icon: <FaTag className="text-deep-brown" />,
                title: "Vendor Tagging",
                desc: '"Green Good" badge for trusted vendors',
              },
              {
                icon: <FaLightbulb className="text-deep-brown" />,
                title: "Business Tips & Vendor Videos",
                desc: "Educational content to help vendors grow",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-soft-yellow flex-shrink-0 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-deep-brown">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

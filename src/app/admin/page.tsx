"use client";
import api from "@/lib/axiosInstance";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FiPlus,
  FiX,
  FiUsers,
  FiTruck,
  FiSettings,
  FiLogOut,
  FiHome,
} from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const AdminDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"teams" | "vendors">("teams");
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState<any>({});
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const endpoint = activeTab === "teams" ? "/teams" : "/vendors";
        const res = await api.get(endpoint);
        console.log(res);
        const data = await res.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const endpoint = activeTab === "teams" ? "/api/teams" : "/api/vendors";
      const payload = { ...formData, image: imageUrl };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newItem = await response.json();
        setData([...data, newItem]);
        resetForm();
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const resetForm = () => {
    setFormData({});
    setImageUrl("");
  };

  const handleTabChange = (tab: "teams" | "vendors") => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600"
            aria-label="Toggle menu"
          >
            <HiOutlineMenuAlt2 size={24} />
          </button>
          <h1 className="text-xl font-bold text-[#F25822]">Admin Dashboard</h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-20`}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="p-6 border-b border-gray-100">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-xl font-bold text-[#F25822] hover:text-[#e04e1a] transition-colors"
          >
            <FiHome className="mr-2" />
            Admin Panel
          </button>
        </div>

        <nav className="p-4">
          <button
            onClick={() => handleTabChange("teams")}
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "teams"
                ? "bg-[#F25822]/10 text-[#F25822]"
                : "text-gray-600 hover:bg-gray-100"
            } transition-colors duration-200`}
          >
            <FiUsers className="mr-3" />
            <span>Team Members</span>
          </button>
          <button
            onClick={() => handleTabChange("vendors")}
            className={`flex items-center w-full p-3 rounded-lg mb-2 ${
              activeTab === "vendors"
                ? "bg-[#F25822]/10 text-[#F25822]"
                : "text-gray-600 hover:bg-gray-100"
            } transition-colors duration-200`}
          >
            <FiTruck className="mr-3" />
            <span>Vendors</span>
          </button>
          <div className="mt-8 pt-4 border-t border-gray-100">
            <button
              className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiSettings className="mr-3" />
              <span>Settings</span>
            </button>
            <button
              className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 capitalize">
                {activeTab}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                Manage your {activeTab === "teams" ? "team members" : "vendors"}
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 md:mt-0 flex items-center bg-[#F25822] text-white px-4 py-2 rounded-lg hover:bg-[#e04e1a] transition-colors text-sm sm:text-base"
            >
              <FiPlus className="mr-2" />
              Add {activeTab === "teams" ? "Team Member" : "Vendor"}
            </button>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F25822]"></div>
            </div>
          ) : data.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center">
              <p className="text-gray-500">No {activeTab} found</p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 bg-[#F25822] text-white px-4 py-2 rounded-lg hover:bg-[#e04e1a] transition-colors text-sm sm:text-base"
              >
                Create your first{" "}
                {activeTab === "teams" ? "team member" : "vendor"}
              </button>
            </div>
          ) : activeTab === "teams" ? (
            <TeamGrid data={data} />
          ) : (
            <VendorGrid data={data} />
          )}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Add {activeTab === "teams" ? "Team Member" : "Vendor"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {activeTab === "teams" ? "Profile Image" : "Logo/Image"}
                </label>
                {imageUrl ? (
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <CldImage
                        width="200"
                        height="200"
                        src={imageUrl}
                        alt="Preview"
                        className="rounded-lg object-cover w-32 h-32"
                      />
                      <button
                        type="button"
                        onClick={() => setImageUrl("")}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        aria-label="Remove image"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <CldUploadWidget
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                    }
                    onSuccess={(result: any) => {
                      setImageUrl(result.info.secure_url);
                    }}
                  >
                    {({ open }) => (
                      <button
                        type="button"
                        onClick={() => open()}
                        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-[#F25822] transition-colors"
                      >
                        <div className="flex flex-col items-center">
                          <FiPlus className="text-gray-400 mb-2" size={24} />
                          <p className="text-sm text-gray-600">
                            Click to upload
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            PNG, JPG, or GIF (max. 5MB)
                          </p>
                        </div>
                      </button>
                    )}
                  </CldUploadWidget>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {activeTab === "teams" ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role*
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description*
                      </label>
                      <textarea
                        name="description"
                        value={formData.description || ""}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isCoFounder"
                        checked={formData.isCoFounder || false}
                        onChange={handleInputChange}
                        id="isCoFounder"
                        className="h-4 w-4 text-[#F25822] focus:ring-[#F25822] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isCoFounder"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Co-Founder
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address*
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address || ""}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Story*
                      </label>
                      <textarea
                        name="story"
                        value={formData.story || ""}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#F25822] focus:border-[#F25822] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="verified"
                        checked={formData.verified || false}
                        onChange={handleInputChange}
                        id="verified"
                        className="h-4 w-4 text-[#F25822] focus:ring-[#F25822] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="verified"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Verified Vendor
                      </label>
                    </div>
                  </>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 mt-6 sm:mt-8 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 bg-[#F25822] text-white rounded-lg hover:bg-[#e04e1a] disabled:opacity-50 text-sm sm:text-base"
                  disabled={!imageUrl}
                >
                  Save {activeTab === "teams" ? "Member" : "Vendor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Team Grid Component
const TeamGrid = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {data?.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-4 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-3 sm:mb-4">
                <CldImage
                  width="120"
                  height="120"
                  src={item.avatar}
                  alt={item.name}
                  className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#F25822]"
                />
                {item.isCoFounder && (
                  <span className="absolute bottom-0 right-0 bg-[#F25822] text-white text-xs px-2 py-1 rounded-full">
                    Co-Founder
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-[#F25822] font-medium text-sm sm:text-base">
                {item.role}
              </p>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
          <div className="bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 border-t border-gray-100 flex justify-between">
            <button className="text-xs sm:text-sm text-[#F25822] hover:underline">
              Edit
            </button>
            <button className="text-xs sm:text-sm text-gray-500 hover:text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Vendor Grid Component
const VendorGrid = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {data?.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="h-32 sm:h-40 bg-gray-100 relative">
            <CldImage
              fill
              src={item.image}
              alt={item.name}
              className="object-cover"
            />
            {item.verified && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Verified
              </span>
            )}
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              {item.name}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 truncate">
              {item.email}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {item.phone}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
              {item.story}
            </p>
          </div>
          <div className="bg-gray-50 px-3 sm:px-4 py-2 border-t border-gray-100 flex justify-between">
            <button className="text-xs sm:text-sm text-[#F25822] hover:underline">
              Edit
            </button>
            <button className="text-xs sm:text-sm text-gray-500 hover:text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;

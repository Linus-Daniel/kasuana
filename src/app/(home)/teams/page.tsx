"use client";
import { CldImage } from "next-cloudinary";
import api from "@/lib/axiosInstance";
import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  isCoFounder?: boolean;
}

export default function TeamPage() {
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await api.get("/teams");
        setTeamData(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-custom mb-12">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 ${
                member.isCoFounder ? "border-4 border-primary" : ""
              }`}
            >
              <div className="flex flex-col items-center p-6">
                <div className="w-40 h-40 relative mb-4">
                  <CldImage
                    width={160}
                    height={160}
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover mx-auto"
                  />
                  {member.isCoFounder && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-xs shadow-md">
                      Co-Founder
                    </span>
                  )}
                </div>
                <h2
                  className={`text-xl font-bold mb-2 ${
                    member.isCoFounder ? "text-primary" : "text-deep-brown"
                  }`}
                >
                  {member.name}
                </h2>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    member.isCoFounder
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {member.role}
                </div>
                <p className="text-center text-gray-700">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

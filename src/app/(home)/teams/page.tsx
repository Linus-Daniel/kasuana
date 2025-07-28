"use client";
import { CldImage } from "next-cloudinary";
import api from "@/lib/axiosInstance";
import { useEffect, useState } from "react";
import TeamCard from "@/components/TeamCard";

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

  const team = teamData.filter((member) => !member.role.includes("Founder"));
  const founder = teamData.find((member) => member.role.includes("Founder "));


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
          <TeamCard member={founder as TeamMember} />
          {team.map((member,index) => (
            <TeamCard member={member} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

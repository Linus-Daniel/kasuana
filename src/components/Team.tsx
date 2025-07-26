"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import api from "@/lib/axiosInstance";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  bgColor: string;
  textColor: string;
  isCoFounder?: boolean;
}

interface TeamData {
  founders: TeamMember[];
  coreTeam: TeamMember[];
}

export default function TeamSection() {
  const [teamData, setTeamData] = useState<TeamData>({
    founders: [],
    coreTeam: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await api.get("/teams");
        const data = response.data;
        const founders = data.filter((member: TeamMember) => member.isCoFounder);
        const coreTeam = data.filter((member:TeamMember)=> !member.isCoFounder)
        console.log("our Teams", coreTeam)
        console.log("our Co-Founders", founders)
        const teamData = {
          founders,
          coreTeam,
        }
        setTeamData(teamData)

    

   

        // setTeamData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <section id="team" className="py-16 bg-warm-white text-center">
        <div className="container mx-auto">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-deep-brown">Loading team data...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="py-16 bg-warm-white text-center">
        <div className="container mx-auto">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Our Team
        </h2>

        {teamData.founders.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-deep-brown mb-8">
              Founders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {teamData.founders.map((founder) => (
                <div
                  key={founder.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-64 bg-beige">
                    <CldImage
                      width="600"
                      height="400"
                      src={founder.image}
                      alt={founder.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-deep-brown">
                      {founder.name}
                    </h4>
                    <div
                      className={`inline-block px-3 py-1 ${founder.bgColor} ${founder.textColor} text-xs sm:text-sm rounded-full my-2`}
                    >
                      {founder.role}
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {teamData.coreTeam.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-deep-brown mb-8">
              Core Team
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {teamData.coreTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md p-4 text-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <CldImage
                      width="200"
                      height="200"
                      src={member.image}
                      alt={member.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-deep-brown text-sm sm:text-base">
                    {member.name}
                  </h4>
                  <div
                    className={`inline-block px-2 py-1 ${member.bgColor} ${member.textColor} text-xs sm:text-sm rounded-full my-2`}
                  >
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

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
        setLoading(true);
        // Fetch from your API endpoint
        const response = await fetch("/api/teams");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();

        // Transform the API data to match your UI structure
        const transformedData: TeamData = {
          founders: data
            .filter((member: any) => member.isCoFounder)
            .map((founder: any) => ({
              id: founder._id,
              name: founder.name,
              role: founder.role,
              description: founder.description || "",
              image:
                founder.avatar ||
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
              alt: `${founder.name} profile`,
              bgColor: "bg-olive-green",
              textColor: "text-white",
              isCoFounder: true,
            })),
          coreTeam: data
            .filter((member: any) => !member.isCoFounder)
            .map((member: any) => ({
              id: member._id,
              name: member.name,
              role: member.role,
              description: member.description || "",
              image:
                member.avatar ||
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
              alt: `${member.name} profile`,
              bgColor: "bg-soft-yellow",
              textColor: "text-deep-brown",
            })),
        };

        setTeamData(transformedData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        // Fallback to local data if API fails
        setTeamData({
          founders: [
            {
              id: "founder-1",
              name: "Abednego Yakubu",
              role: "Founder & Lead Strategist",
              description:
                "Visionary entrepreneur with a passion for empowering local businesses through innovative digital solutions.",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
              alt: "Professional African male business leader",
              bgColor: "bg-olive-green",
              textColor: "text-white",
            },
            {
              id: "founder-2",
              name: "Samuel Pagher",
              role: "Brand Designer & Co-founder",
              description:
                "Creative force behind Kasuana's visual identity, with expertise in crafting culturally relevant brand experiences.",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/ff17e57a4c-c24c52a2bd2351b6ab26.png",
              alt: "Creative African male designer",
              bgColor: "bg-olive-green",
              textColor: "text-white",
            },
          ],
          coreTeam: [
            {
              id: "team-member-1",
              name: "Daniel Alexander Anyida",
              role: "Videographer & Content Lead",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
              alt: "African male videographer",
              bgColor: "bg-soft-yellow",
              textColor: "text-deep-brown",
            },
            {
              id: "team-member-2",
              name: "Selbyen Comfort Fildan",
              role: "Community Manager",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
              alt: "African female community manager",
              bgColor: "bg-soft-yellow",
              textColor: "text-deep-brown",
            },
            {
              id: "team-member-3",
              name: "Hyelavi Abel",
              role: "Digital Marketer",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/77f04df3e9-85acdcd8e5981df2bba5.png",
              alt: "African male digital marketer",
              bgColor: "bg-soft-yellow",
              textColor: "text-deep-brown",
            },
            {
              id: "team-member-4",
              name: "Linus Daniel",
              role: "Software Developer",
              image:
                "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9ee816af2-7d7efdbf1f2b2692e7ec.png",
              alt: "African male software developer",
              bgColor: "bg-soft-yellow",
              textColor: "text-deep-brown",
            },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <section id="team" className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-deep-brown">Loading team data...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error: {error}</p>
          <p className="text-deep-brown mt-2">Showing default team data</p>
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

        {/* Founders */}
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

        {/* Core Team */}
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
      </div>
    </section>
  );
}

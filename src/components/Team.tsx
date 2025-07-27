"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  isCoFounder?: boolean;
}

interface TeamPreviewProps {
  members: TeamMember[];
  maxDisplayCount?: number; // Optional control for how many to show
}

export default function TeamPreview({
  members,
  maxDisplayCount = 4,
}: TeamPreviewProps) {
  const coFounders = members.filter((m) => m.isCoFounder);
  const others = members.filter((m) => !m.isCoFounder);

  const displayedMembers = [...coFounders, ...others].slice(0, maxDisplayCount);

  return (
    <section id="team-preview" className="py-16 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-custom">Our Team</h2>
          <Link href="/teams" className="text-primary hover:underline">
            View All Team Members →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary">
                <CldImage
                  width="200"
                  height="200"
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-deep-brown text-lg">
                {member.name}
              </h3>

              {member.isCoFounder && (
                <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full my-2">
                  Co-Founder
                </span>
              )}

              <p className="text-gray-600 text-sm line-clamp-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

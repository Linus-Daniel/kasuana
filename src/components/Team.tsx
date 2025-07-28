"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import TeamCard from "./TeamCard";

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
  const founder = members.find((m) => m.role.includes("Founder"));
  const coFounders = members.filter((m) => m.isCoFounder);
  const others = members.filter((m) => !m.isCoFounder && m !== founder);

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
          <TeamCard member={founder as TeamMember}  />
          {displayedMembers.map((member,index) => (
            <TeamCard member={member} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

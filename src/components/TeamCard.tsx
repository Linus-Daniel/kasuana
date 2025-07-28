import { CldImage } from 'next-cloudinary';
import React from 'react'

function TeamCard({member}:{member: { id: string; name: string; role: string; description: string; image: string; isCoFounder?: boolean; }}) {

    const founder = member.role.includes("Founder");
  return (
    <div
      key={member.id}
      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
    >
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary">
        <CldImage
          width="200"
          height="200"
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-deep-brown text-lg">{member.name}</h3>

      {member.isCoFounder && (
        <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full my-2">
          Co-Founder
        </span>
      )}
      <p className={`text-deep-brown text-sm ${founder ? 'font-bold bg-primary text-white  rounded-full p-2 text-md my-2' : ''}`}>
        {member.role}
      </p>

      <p className="text-gray-600 text-sm line-clamp-2">{member.description}</p>
    </div>
  );
}

export default TeamCard

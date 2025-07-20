import React from "react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  bio,
  imageSrc,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`bg-zinc-800 rounded-lg p-6 space-y-2 transition-all duration-500 overflow-hidden cursor-pointer ${
        isExpanded ? "max-h-[1000px]" : "max-h-[100px]"
      }`}
      onClick={onToggle}
    >
      <div className="text-white text-lg font-bold">{name}</div>
      <div className="text-yellow-400 text-sm font-medium mt-1">{title}</div>
      {isExpanded && (
        <>
          <img
            src={imageSrc}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover mt-4 mx-auto"
          />
          <p className="text-white text-sm mt-4 leading-relaxed">{bio}</p>
        </>
      )}
    </div>
  );
};

export default TeamMemberCard;
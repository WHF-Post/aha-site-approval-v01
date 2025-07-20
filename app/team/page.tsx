'use client';
import React, { useState } from "react";
import TeamMemberCard from "@/components/TeamMemberCard";
import Link from 'next/link';
import '@/styles/globals.css';
import FeatureTile from '@/components/FeatureTile';

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const team = [
    {
      name: "Katrina Pitts",
      title: "President & CEO",
      imageSrc: "/circular_Katrina Pitts.png",
      bio: `Katrina Pitts, President & CEO of Artistic Heights Academy, blends technical mastery with creative passion to drive visionary leadership. With a BSME and MBA along with extensive STEM experience, she brings innovation and strategic insight to every endeavor. Inspired by her son’s early entertainment career, Katrina embraced the role of “mom-ager,” igniting her commitment to arts education. This led to her interest in leading AHA, where she empowers emerging artists through elite training, mentorship, and immersive learning. Her belief that “Knowledge is Power & Knowledge is the Key to Success” fuels a mission rooted in excellence, discipline, and industry readiness — positioning AHA as a launchpad for confident, high-performing talent.`,
    },
    {
      name: "Lavelle Muhammad",
      title: "Executive Director & COO",
      imageSrc: "/circular_Lavelle Muhammad.png",
      bio: `Lavelle Muhammad, Executive Director & COO of Artistic Heights Academy, brings 30+ years of transformative leadership in education and organizational strategy. His commitment to immersive, structured learning directly aligns with AHA’s mission to elevate emerging artists through elite training and mentorship. Grounded in vision and discipline, Lavelle ensures every operational element — from curriculum to student engagement — reflects excellence. His ability to foster collaboration, strategic alignment, and values-driven programming empowers artists to grow with clarity and confidence, helping position AHA as a premier destination for high-potential performers.`,
    },
    {
      name: "Charles White",
      title: "Content Director",
      imageSrc: "/circular_Charles White_CD.png",
      bio: `Bringing decades of experience in video editing, storytelling, and arts education, Charles blends industry knowledge with hands-on training to guide students in mastering digital storytelling tools and developing their unique voice. He is also the founder of Whitehouse Films, where he has produced award-winning documentaries, branded content, and educational media.`,
    },
    {
      name: "W. Davoe",
      title: "HR Director",
      imageSrc: "/W. Devoe - HR Director.jpg",
      bio: `W. Davoe brings a steady and strategic presence to Artistic Heights Academy as HR Director. With a background in team culture development, compliance, and administrative leadership, she ensures the academy maintains a supportive and professional environment. Her work anchors the organization’s values in everyday operations, balancing empathy with structure to support both staff and students.`,
    },
  ];

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl text-yellow-400 font-bold mb-10 z-10 relative">AHA Team</h1>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto mt-10">
        {team.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            title={member.title}
            bio={member.bio}
            imageSrc={member.imageSrc}
            isExpanded={expandedMember === member.name}
            onToggle={() =>
              setExpandedMember(expandedMember === member.name ? null : member.name)
            }
          />
        ))}
      </div>
    </div>
  );
}

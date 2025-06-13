'use client';

import { useState } from 'react';

const teamMembers = [
  {
    name: 'Jonna Naegele',
    title: 'Founder',
    bio: `Jonna Naegele is the visionary Founder of Artistic Heights Academy, and a renowned American acting coach, producer, and advocate for actors, has spent 16 years empowering individuals to tap into their creative potential and embrace personal growth. With a wealth of experience in nurturing raw talent and guiding aspiring artists, Jonna has honed her ability to perceive and draw out the unique qualities that define each individual. Through her work as a certified life coach, she has developed a deep understanding of the human condition, emphasizing the importance of self-discovery and empathy in the pursuit of artistic excellence.

Driven by a passion for cultural exchange and diversity, Jonna aspires to expand her impact internationally, particularly in Africa and other regions where she already works with students and clients. Her dedication to helping others find their voices and tell their stories is intertwined with a commitment to understanding culturally specific values and beliefs through the study of philosophy. By bridging the gap between different backgrounds and perspectives, Jonna is poised to foster connections and empower individuals from diverse communities to express themselves authentically in the entertainment industry and beyond.`,
  },
  {
    name: 'Katrina Pitts',
    title: 'President & CEO',
    bio: `Katrina Pitts is the President & CEO of Artistic Heights Academy, and has demonstrated a natural aptitude for STEM subjects from an early age, attending the Head Start program at Hampton University before entering elementary school. Her commitment to academic excellence continued throughout her education as she attended magnet schools, participated in extracurricular leadership roles, and tested into Advanced Placement (AP) classes starting in middle school.

Katrina holds a Bachelor of Science degree in Mechanical Engineering (BSME) and a Master's in Business Administration (MBA) with a focus on Project Management. Additionally, she has earned a Project Management Certificate, which further solidifies her expertise in managing complex projects within the IT sector. Throughout her career, Katrina has remained dedicated to staying current with the latest technology trends. She holds six IT certifications in Human Resources Information Systems. This knowledge allows her to provide top-notch consulting services to her clients. In addition to her professional pursuits, Katrina is passionate about giving back to her community. She actively engages with adolescents and adults by teaching and tutoring them in STEM subjects, fostering the next generation's interest in technology.

With family being Katrina’s inspiration, it was her youngest son who made the decision at age 6 to be an actor. As a mom-ager, Katrina had to quickly navigate the entertainment industry in order to help propel his acting career. Her son is a member of the SAG-Aftra Union and continues his acting career, with Katrina being an instrumental part.

Through her extensive experience, educational background, and commitment to community engagement, Katrina Pitts exemplifies what it means to be a leader in the field of IT consulting. Katrina’s pure compassion for performing arts, along with her dedication to the saying “Knowledge is Power & Knowledge is the Key to Success”, is what ultimately drove her mission to inspire and empower the next generation of talent to reach their artistic height!`,
  },
  {
    name: 'Lavelle Muhammad',
    title: 'Executive Director & COO',
    bio: `Lavelle Muhammad is the Executive Director & COO of Artistic Heights Academy, and the Principal and Executive Director of the Nativity School of Harrisburg, a middle school dedicated to serving disadvantaged inner-city boys. He has been a pivotal figure in education since joining the school in 2012, bringing over 30 years of diverse experience in various educational roles, including as a teacher, school administrator, and juvenile corrections administrator. His extensive background equips him with the skills necessary to lead effectively in challenging educational environments.

Lavelle Muhammad’s journey into education was influenced by his own childhood experiences. Growing up in a home affected by addiction and dysfunction, he faced significant challenges that shaped his understanding of the struggles many of his students encounter. This personal history instilled in him a desire to help at-risk youth navigate their circumstances. He initially aspired to become a professional athlete but found inspiration through his stepfather, who worked at a juvenile detention center.

This led Muhammad to pursue a career in education, where he could make a meaningful impact on young lives. He returned to school to study educational leadership, earning a master's degree that prepared him for his role as an educator and leader.

Since becoming Principal at Nativity School of Harrisburg, Muhammad has focused on creating a nurturing environment that emphasizes respect and personal growth for each student. Under his leadership, the school aims to break the cycle of poverty through education by providing boys from challenging backgrounds with opportunities for academic success and personal development. Muhammad’s approach combines discipline with compassion; he believes in treating students with respect while also maintaining high expectations for their behavior and performance. His ability to connect with students—many of whom come from fatherless homes—has made him a father figure and mentor to many boys at the school.

Through his dedication and leadership at Nativity School of Harrisburg, Lavelle Muhammad exemplifies how personal experiences can fuel professional passion, ultimately transforming lives through education.`,
  },
{
  name: 'Charles White',
  title: 'Content Director',
  bio: `Bringing decades of experience in video editing, storytelling, and arts education, Charles blends industry knowledge with hands-on training to guide students in mastering digital storytelling tools and developing their unique voice. He is also the founder of Whitehouse Films, where he has produced award-winning documentaries, branded content, and educational media.`
},
{
  name: 'W. Devoe',
  title: 'HR Director',
  bio: `W. Devoe brings a wealth of experience and dedication to her role as HR Director at Artistic Heights Academy. With a passion for cultivating creative talent and building strong organizational culture, she plays a vital role in supporting the Academy’s mission and growth. Her full story and impact are still unfolding — more to come!`
}
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-800 to-black">
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">AHA Team</h1>
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-3xl font-semibold text-white">{member.name}</h2>
              <h3 className="text-xl text-yellow-400">{member.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
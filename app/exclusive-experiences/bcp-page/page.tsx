import Image from 'next/image';

export default function BCPPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 pt-24 pb-16">
      <Image
        src="/bcp_logo_heart_white.png"
        alt="BCP Logo"
        width={400}
        height={400}
        className="mb-6"
      />
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Honoring Bryce Christopher Pitts</h1>
        <p className="mb-4">
          At the tender age of 22, Bryce Christopher Pitts was involved in a fatal car accident and transitioned. He was an awesome son, brother, nephew, cousin, student, and reliable friend to all. Bryce had a heart of pure gold and was willing to help anyone in their time of need.
        </p>
        <p className="mb-4">
          Born on June 28, 2000 and at an early age many could tell that Bryce was a brilliant and special child. He attended private school from K-5 and was deemed gifted once he entered public middle school. He was what most considered an old soul and extremely independent. He was always a consistent, caring, and popular person. Bryce always had an infectious smile and witty humor that would brighten up anyone's day.
        </p>
        <p className="mb-4">
          Over the years, Bryce demonstrated his innate talent and keen ear for the music industry. He showcased his musical talent through performances in talent shows, engaging in internships at prestigious music production companies, and dedicating his free time to composing, arranging, and editing music. Bryce enrolled in the music program at the Art Institute of Atlanta to enhance his knowledge and skills in the music industry while also attending the University of North Georgia.
        </p>
        <p className="mb-4">
          In his brief 22 years, Bryce profoundly influenced many lives. His family believes that the most fitting tribute to him and his legacy is to perpetuate the love, help, assistance, and support that Bryce exemplified. Bryce's essence continues to reside within us, and his light will eternally serve as a guiding star to all.
        </p>
        <p>
          Therefore, Artistic Heights Academy aims to honor the late Bryce Christopher Pitts’ legacy by naming the LA MCE sponsorship opportunity the BCP Scholarship. This scholarship is designed to empower one aspiring artist to follow their dreams and achieve their fullest artistic potential.
        </p>
        <div className="flex justify-center">
          <Image
            src="/Bryce.png"
            alt="Bryce Christopher Pitts"
            width={280}
            height={380}
            className="mb-6 drop-shadow-xl object-contain opacity-0 animate-float-in"
          />
        </div>
      </div>
    </div>
  );
}
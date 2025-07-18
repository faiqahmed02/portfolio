import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Profile Image */}
        <Image
          width={128}
          height={128}
          src="/images/faiq.jpg" // replace with your actual image path
          alt="Faiq Ahmed"
          className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover border-4 border-white"
        />

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold">Faiq Ahmed</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-3">
          Full-Stack Software Engineer | React | Next.js | TypeScript | Node.js | Firebase
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="mailto:faiqahmed73@hotmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

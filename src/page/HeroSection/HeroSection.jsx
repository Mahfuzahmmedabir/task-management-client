import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  const wave = document.querySelector('.wave');
  let clipPath = '';

  const N = 100;
  for (let i = 0; i < N + 1; i++) {
    clipPath =
      clipPath +
      `${(100 / N) * i}% ${
        100 * (0.5 + 0.35 * Math.sin((2 * Math.PI * i) / N))
      }%,`;
  }

  clipPath = clipPath + '100% 100%,0 100%';

  clipPath = `polygon(${clipPath})`;




  return (
    <div>
      <section className="h-screen flex  flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        {/* Headline */}
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Boost Your Productivity!
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          Organize your tasks, track progress, and get things done efficiently.
        </p>

        {/* CTA Button */}
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Get Started for Free
        </Link>
      </section>
    </div>
  );
};

export default HeroSection;
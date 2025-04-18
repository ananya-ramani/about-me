import React from "react";
import { Linkedin, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      <div className="relative mb-6 md:mb-8">
        <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-2xl md:blur-3xl opacity-60 animate-pulse z-0"></div>
        <img
          src="Ananya.jpg"
          alt="Ananya More Profile Picture"
          className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10 shadow-lg z-10"
        />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-fade-in">
          Ananya More
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 animate-fade-in-delay">
          Business Management & Finance Professional
        </p>
        <div className="flex space-x-4 animate-fade-in-delay-more">
          <a
            href="https://www.linkedin.com/in/ananya-more18/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-600 text-purple-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>

          <a
            href="mailto:contact@ananya-ramani.in"
            aria-label="Send Email"
            className="p-2 rounded-full bg-gray-800/50 hover:bg-red-600 text-red-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </main>

      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-40 w-16 h-16 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.3s forwards;
        }
        .animate-fade-in-delay-more {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.6s forwards;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

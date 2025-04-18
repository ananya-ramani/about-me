import React from "react";
import { Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Ananya More</h3>
            <p className="text-gray-400">
              Business Management & Finance Professional
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/ananya-more18/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 text-purple-400 hover:text-white transition duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@ananya-ramani.in"
              aria-label="Send Email"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 text-red-400 hover:text-white transition duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 text-purple-400 hover:text-white transition duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ananya More. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { name: "About", targetId: "about" },
  { name: "Skills", targetId: "skills" },
  { name: "Education", targetId: "education" },
  { name: "Experience", targetId: "experience" },
  { name: "Awards", targetId: "awards" },
  { name: "Certifications", targetId: "certifications" },
  { name: "Volunteering", targetId: "volunteering" },
  { name: "Languages", targetId: "languages" },
  { name: "References", targetId: "references" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set up intersection observer for sections
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    NAV_LINKS.forEach(link => {
      const element = document.getElementById(link.targetId);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      NAV_LINKS.forEach(link => {
        const element = document.getElementById(link.targetId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300">
              <span className="font-bold text-xl text-purple-600 dark:text-white">Ananya More</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.targetId)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 relative group ${
                    activeSection === link.targetId ? 'text-white bg-purple-700/50' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isScrolled || isOpen ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.targetId)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                activeSection === link.targetId ? 'text-white bg-purple-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Certifications } from './components/Certifications';
import { Volunteering } from './components/Volunteering';
import { Languages } from './components/Languages';
import { References } from './components/References';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Awards />
      <Certifications />
      <Volunteering />
      <Languages />
      <References />
      <Footer />
    </div>
  );
}

export default App;
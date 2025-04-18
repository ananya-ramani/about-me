import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen/2 w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-900 overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-red-400">
        About Me
      </h2>

      <div className="relative max-w-3xl mx-auto z-10">
        <div>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            I'm Ananya More, a BA (Hons) Business Management and Accounting
            and Finance student at NTU. I've gained practical experience as a
            Business Development and Marketing Intern at Ubergrad Education
            Consultancy, as well as an intern in Fund Management at Alfa
            Global Pvt. Ltd. I'm currently a Student Mentor & Ambassador for
            2024–25 and an International Enquiries Assistant, where I assist
            prospective international students.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I also contribute as a Student Panel member and as a Researcher on
            academic projects. Outside my studies, I volunteer at the British
            Heart Foundation and actively participate in initiatives like the
            University Business Challenge (UBC) and NTU awards to enhance my
            learning and growth.
          </p>
        </div>
      </div>
    </section>
  );
};
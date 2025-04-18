import React from 'react';
import { Award } from 'lucide-react';

const awardsData = [
  {
    id: "u11qdtm7x7wf4yknqgu4n8tt",
    title: "NTU Excellence Scholarship",
    awarder: "Nottingham Trent University",
    date: "July 2023",
    summary: "Awarded for academic excellence and leadership potential.",
    imageUrl: "/Awards/scollership-awards.png",
  },
];

export const Awards: React.FC = () => {
  return (
    <section
      id="awards"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-400">
        <Award className="inline-block w-10 h-10 mr-3 mb-1" /> Awards
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {awardsData.map((award) => (
          <div key={award.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-yellow-500/80">
              {award.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={award.imageUrl}
                    alt={`${award.title} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 tracking-wide mb-2">
                  {award.title}
                </h3>
                <p className="text-lg text-white font-medium mb-2">
                  Awarded by: {award.awarder}
                </p>
                
                {award.date && (
                  <p className="mb-3 text-sm text-gray-400">
                    {award.date}
                  </p>
                )}
                
                {award.summary && (
                  <p className="text-gray-300">
                    {award.summary}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
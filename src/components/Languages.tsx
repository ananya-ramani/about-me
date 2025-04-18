import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

const languagesData = [
  {
    id: "djzqp34e10vd4hhvk8tzwr2o",
    name: "English",
    description: "Native/Fluent",
    level: 5,
  },
  {
    id: "lzlu5mhwijn36acxyyi0v0w2",
    name: "Italian",
    description: "Basic Proficiency",
    level: 2,
  },
];

export const Languages: React.FC = () => {
  return (
    <section
      id="languages"
      className="min-h-screen/2 w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-950"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400">
        <LanguagesIcon className="inline-block w-10 h-10 mr-3 mb-1" /> Languages
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {languagesData.map((lang) => (
          <div key={lang.id} className="flex">
            <div className="flex-1 text-center p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 transition-shadow duration-300 hover:shadow-xl hover:border-purple-500/80">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                {lang.name}
              </h3>
              <p className="text-lg text-gray-300">{lang.description}</p>
              
              {/* Simple progress bar based on level */}
              <div className="mt-4 w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${(lang.level / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
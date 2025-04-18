import React from "react";
import { UserCheck } from "lucide-react";

const referencesData = [
  {
    id: "nqz6p2rgawfmwd9xy8bkjt5q",
    name: "Hilary Patterson",
    description: "Course Leader",
    summary:
      "<p>Contact - <a target='_blank' rel='noopener noreferrer nofollow' href='mailto:hilary.patterson@ntu.ac.uk'>hilary.patterson@ntu.ac.uk</a></p>",
    imageUrl: "/References/Hillary-Patterson.png",
  },
  {
    id: "tzvd96duwg5d3m5y2ib6q7c2",
    name: "Serah Akelola",
    description: "Assistant Course Leader and Tutor",
    summary:
      "<p>Contact - <a target='_blank' rel='noopener noreferrer nofollow' href='mailto:serah.akelola@ntu.ac.uk'>serah.akelola@ntu.ac.uk</a></p>",
    imageUrl: "/References/Serah_Akelola_1820.jpg",
  },
  {
    id: "tzvd96duwg5d3m5y2ib6q7c3",
    name: "Navin Hariharan",
    description: "Director of CyberHakz",
    summary:
      "<p>Contact - <a target='_blank' rel='noopener noreferrer nofollow' href='mailto:contact@navin-hariharan.com'>contact@navin-hariharan.com</a></p>",
    imageUrl: "/References/navin-hariharan.png",
  },
];

export const References: React.FC = () => {
  return (
    <section
      id="references"
      className="min-h-screen/2 w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-pink-400">
        <UserCheck className="inline-block w-10 h-10 mr-3 mb-1" /> References
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {referencesData.map((reference) => (
          <div key={reference.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-pink-500/80">
              {reference.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={reference.imageUrl}
                    alt={`${reference.name} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-pink-300 tracking-wide mb-2">
                  {reference.name}
                </h3>
                <p className="text-md text-gray-400 italic mb-3">
                  {reference.description}
                </p>

                {reference.summary && (
                  <div
                    className="text-gray-300 prose prose-sm max-w-none [&_a]:text-pink-400 hover:[&_a]:text-pink-300"
                    dangerouslySetInnerHTML={{ __html: reference.summary }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

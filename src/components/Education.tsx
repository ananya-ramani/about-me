import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: "mvk0a0mztneviuf7olcaf09t",
    institution: "Nottingham Trent University",
    studyType: "BA (Hons)",
    area: "Business Management, Accounting, and Finance",
    score: "First-Class Honours (Expected)",
    date: "September 2023 - Present",
    summary: "",
    imageUrl: "/Education/nottingham.jpg",
  },
  {
    id: "as5hf94sgj2c4wzg0omujtg1",
    institution: "Vardhaman Junior College",
    studyType: "12th Class (A Levels Equivalent)",
    area: "PCMB",
    score: "8 CGPA",
    date: "Completed 2021",
    summary: "",
    imageUrl: "/Education/photo-1509062522246-3755977927d7.avif",
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-green-400">
        <GraduationCap className="inline-block w-10 h-10 mr-3 mb-1" /> Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {educationData.map((edu) => (
          <div key={edu.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-green-500/80">
              {edu.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={edu.imageUrl}
                    alt={`${edu.institution} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-green-300 tracking-wide mb-2">
                  {edu.institution}
                </h3>
                <p className="text-lg text-white font-medium mb-2">
                  {edu.area} ({edu.studyType})
                </p>

                {edu.date && (
                  <p className="mb-2 text-sm text-gray-400">{edu.date}</p>
                )}

                {edu.score && (
                  <p className="text-md text-gray-300 mb-3">
                    Grade: {edu.score}
                  </p>
                )}

                {edu.summary && (
                  <div
                    className="mt-3 text-gray-300 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: edu.summary }}
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

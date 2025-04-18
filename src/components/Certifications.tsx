import React from "react";
import { BadgeCheck } from "lucide-react";

const certificationsData = [
  {
    id: "new-cert-ntu-employability",
    name: "NTU Employability Awards",
    issuer: "NTU",
    date: "2024/2025",
    summary: "",
    imageUrl: "/Certifications/NTU_Gold_Award_Achievement.jpg",
  },
  {
    id: "tf3c1p4rbrzgtds2ovtax562",
    name: "Business, Operations and Marketing Internship Certificate",
    issuer: "Bright Network",
    date: "July 2024",
    summary: "",
    imageUrl: "/Certifications/BrightNetwork.png",
  },
  {
    id: "w6qf7xs0dbutfrssxik8ndlp",
    name: "Universities Business Challenge",
    issuer: "UBC Worldwide",
    date: "November 2024",
    summary: "",
    imageUrl: "/Certifications/UBC.png",
  },
];

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-950"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400">
        <BadgeCheck className="inline-block w-10 h-10 mr-3 mb-1" />{" "}
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-cyan-500/80">
              {cert.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.name} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-cyan-300 tracking-wide mb-2">
                  {cert.name}
                </h3>
                <p className="text-lg text-white font-medium mb-2">
                  Issued by: {cert.issuer}
                </p>

                {cert.date && (
                  <p className="mb-3 text-sm text-gray-400">{cert.date}</p>
                )}

                {cert.summary && (
                  <p className="text-gray-300 mb-4">{cert.summary}</p>
                )}

                <div className="mt-auto pt-4">
                  <button
                    className="px-4 py-2 bg-gray-700 hover:bg-cyan-700 text-cyan-300 hover:text-white rounded-md transition-colors duration-300"
                    onClick={() => window.open(cert.imageUrl, "_blank")}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

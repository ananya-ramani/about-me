import React from "react";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    id: "be4i4h2vha51sh5q60gxivil",
    company: "Nottingham Trent University",
    position: "International Enquiries Assistant",
    location: "Nottingham",
    date: "April 2025 - Present",
    summary:
      "<p>Respond to inquiries from prospective international students, providing clear and accurate information about courses, entry requirements, and university life.</p><p>Guide students through the application process, offering support and advice to ensure a smooth journey to NTU.</p><p>Enhance cross-cultural communication skills by engaging with students from diverse backgrounds, ensuring a professional and welcoming experience.</p>",
    imageUrl: "/Experience/photo-1556761175-b413da4baf72.avif",
  },
  {
    id: "wtkvi8tjtvqxqz7n7zr90sl3",
    company: "Nottingham Trent University",
    position: "Student Mentor & Ambassador",
    location: "Nottingham",
    date: "September 2024 - Present",
    summary:
      "<p>Support first-year students with academic advice and guidance to help them transition smoothly into university life.</p><p>Lead campus tours and share personal experiences to help new students feel welcomed and informed.</p><p>Represent NTU at events, promoting the university and engaging with prospective students and families.</p><p>Develop communication and leadership skills while mentoring and providing valuable support to fellow students.</p>",
    imageUrl: "/Experience/photo-1543269865-cbf427effbad.avif",
  },
  {
    id: "q8js91kszctraesltn1urkaa",
    company: "Ubergrad Education Consultancy",
    position: "Business Development and Marketing Intern",
    location: "Remote",
    date: "December 2022 - February 2023",
    summary:
      "<p>Managed client portfolios, addressing inquiries and concerns to ensure client satisfaction.</p><p>Supported the sales process through lead prospecting (call/email) and maintaining daily activity spreadsheets.</p>",
    imageUrl: "/Experience/photo-1516321318423-f06f85e504b3.avif",
  },
  {
    id: "q8js91kszctraesltn1urkab",
    company: "Nottingham Trent University",
    position: "Student Panel Member & Peer Researcher",
    location: "Nottingham",
    date: "Feb 2025 - Present",
    summary:
      "<p>Working with CenSCE to represent student voices in key university initiatives. I co-design projects to enhance student engagement, contribute to impact evaluations using the Theory of Change model, and conduct interviews/focus groups as a trained peer researcher (Doctoral School). This role strengthens my skills in research, communication, teamwork, and time management.</p>",
    imageUrl:
      "/Experience/11062b_012cc50146a54aa895ad0f02672ade6f~mv2_d_2500_1415_s_2.avif",
  },
  {
    id: "q8js91kszctraesltn1urkac",
    company: "Nottingham Trent University",
    position: "Course Representative",
    location: "Nottingham",
    date: "Oct 2024 - Present",
    summary:
      "<p>I serve as a bridge between students and faculty, collecting peer feedback on teaching, resources, and support. I share these insights in staff meetings to help improve the course experience. This role allows me to effectively advocate for student needs and contribute to a more supportive academic environment.</p>",
    imageUrl: "/Experience/NTSU0-Clifton-logo-320x220-copy.png",
  },
  {
    id: "q8js91kszctraesltn1urkad",
    company: "ALFA GLOBAL WEALTH ADVISORS",
    position: "Stock Market Analyst Intern",
    location: "Nottingham",
    date: "Aug 2024 - Sep 2024",
    summary:
      "<p>Analyzed market trends and financial data to provide investment recommendations. Conducted research on potential investment opportunities and prepared detailed reports. Assisted in portfolio management and client presentations. Developed skills in financial analysis, market research, and investment strategy.</p>",
    imageUrl: "/Experience/alfaglobal.png",
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-950"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400">
        <Briefcase className="inline-block w-10 h-10 mr-3 mb-1" /> Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {experienceData.map((exp) => (
          <div key={exp.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-blue-500/80">
              {exp.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={exp.imageUrl}
                    alt={`${exp.company} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 tracking-wide mb-2">
                  {exp.position}
                </h3>
                <p className="text-lg text-white font-medium mb-2">
                  {exp.company}
                  {exp.location && (
                    <span className="text-gray-400 font-normal">
                      {" "}
                      | {exp.location}
                    </span>
                  )}
                </p>

                {exp.date && (
                  <p className="mb-3 text-sm text-gray-400">{exp.date}</p>
                )}

                {exp.summary && (
                  <div
                    className="text-gray-300 prose prose-sm max-w-none marker:text-blue-400"
                    dangerouslySetInnerHTML={{ __html: exp.summary }}
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

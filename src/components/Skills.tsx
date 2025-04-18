import React from "react";

const skills = [
  {
    id: "ngnjslcmqn8kgqca9j6i61hk",
    name: "Communication & Customer Service",
    description:
      "I take pride in my ability to communicate effectively and empathetically, whether assisting prospective international students as an International Enquiries Assistant or providing customer support during my volunteer work. I address a variety of queries with clarity and professionalism, ensuring that every individual feels heard and supported.",
    imageUrl: "/skills/photo-1519389950473-47ba0277781c.avif",
  },
  {
    id: "bblruoxb2z6sk15atcn6smok",
    name: "Project Management, Team Collaboration & Microsoft Office Skills",
    description:
      "I thrive in collaborative environments and enjoy managing multiple responsibilities. Whether it's coordinating client portfolios at Ubergrad Education Consultancy or working with my Student Panel, I am skilled at prioritizing tasks, collaborating with teams, and ensuring timely execution of projects. Additionally, I am proficient in Microsoft Excel, PowerPoint, and Word, which I use for data analysis, presentations, and reporting.",
    imageUrl: "/skills/photo-1517048676732-d65bc937f952.avif",
  },
  {
    id: "u6npbz2znmpnrw8vyxop1x3h",
    name: "Research & Analytical Skills",
    description:
      "Through my experience as a Researcher in academic projects and my internship in Fund Management, I've developed strong analytical skills. I enjoy diving deep into data, analyzing trends, and using insights to make informed decisions that contribute to both academic and professional success.",
    imageUrl: "/skills/photo-1499750310107-5fef28a66643.avif",
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-950"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-pink-400">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-pink-500/80">
              {skill.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={skill.imageUrl}
                    alt={`${skill.name} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-pink-400 tracking-wide mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

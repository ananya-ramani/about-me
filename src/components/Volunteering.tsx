import React from "react";
import { HeartHandshake } from "lucide-react";

const volunteerData = [
  {
    id: "wcsto7302x0mlc6c3w7vq30y",
    organization: "British Heart Foundation",
    position: "Volunteer",
    location: "Nottingham",
    date: "December 2023 - May 2024",
    summary:
      "<p>Managed inventory, organizing and maintaining clothing items.</p><p>Provided customer support, assisting clients and addressing inquiries.</p><p>Engaged in marketing efforts to raise awareness.</p><p>Offered administrative assistance, aiding in data entry and scheduling tasks.</p>",
    imageUrl:
      "/Volunteering/proud-to-support-british-heart-foundation-2022-2023.jpg",
  },
  {
    id: "wcsto7302x0mlc6c3w7vq30z",
    organization: "Philants Pune",
    position: "Volunteer",
    location: "Pune",
    date: "December 2021 - Feb 2023",
    summary:
      "<p>Contributed to impactful community initiatives focused on health, education, and social welfare. I helped organize a breast cancer awareness seminar to honour cancer warriors and spread awareness about early detection and support systems. Additionally, I actively participated in food drives, Diwali donation drives, and blood donation campaigns, aiming to support underprivileged communities during times of need. Through this role, I worked towards creating positive social change and empowering those in vulnerable situations.</p>",
    imageUrl: "/Volunteering/Philants.webp",
  },
  {
    id: "wcsto7302x0mlc6c3w7vq31a",
    organization: "Bookwallah Organisation (Pune Chapter)",
    position: "Volunteer",
    location: "Pune",
    date: "Oct 2021 - Jun 2023",
    summary:
      "<p>Engaged children in interactive storytelling sessions to nurture creativity, imagination, and a love for reading. I curated diverse stories and facilitated meaningful discussions to promote literacy. We also celebrated Christmas with the children, creating a warm, joyful, and wholesome experience that brought smiles and a sense of belonging to everyone involved.</p>",
    imageUrl: "/Volunteering/Bookwallah.jpeg",
  },
  {
    id: "wcsto7302x0mlc6c3w7vq31b",
    organization: "Simmi Foundation",
    position: "Volunteer",
    location: "Remote",
    date: "Dec 2022 - Jan 2023",
    summary:
      "<p>Raised funds to support underprivileged children's education and promote equal learning opportunities. I also visited orphanages and old age homes, offering companionship and assistance to bring comfort and joy to the residents. This role deepened my commitment to social impact and community well-being.</p>",
    imageUrl: "/Volunteering/simmi-foundation.jpg",
  },
];

export const Volunteering: React.FC = () => {
  return (
    <section
      id="volunteering"
      className="min-h-screen w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-orange-400">
        <HeartHandshake className="inline-block w-10 h-10 mr-3 mb-1" />{" "}
        Volunteering
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {volunteerData.map((vol) => (
          <div key={vol.id} className="group">
            <div className="h-full flex flex-col overflow-hidden bg-gray-800 rounded-lg shadow-xl border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:border-orange-500/80">
              {vol.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={vol.imageUrl}
                    alt={`${vol.organization} image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-orange-300 tracking-wide mb-2">
                  {vol.position}
                </h3>
                <p className="text-lg text-white font-medium mb-2">
                  {vol.organization}
                  {vol.location && (
                    <span className="text-gray-400 font-normal">
                      {" "}
                      | {vol.location}
                    </span>
                  )}
                </p>

                {vol.date && (
                  <p className="mb-3 text-sm text-gray-400">{vol.date}</p>
                )}

                {vol.summary && (
                  <div
                    className="text-gray-300 prose prose-sm max-w-none marker:text-orange-400"
                    dangerouslySetInnerHTML={{ __html: vol.summary }}
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

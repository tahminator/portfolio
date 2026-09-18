type Experience = {
  role: string;
  company: string;

  location: string;
  dates: string;
};
const experiences: Experience[] = [
  {
    role: "Software Engineer Intern/Co-op (Fall)",
    company: "Integral Ad Science",
    location: "New York, NY",
    dates: "Sep. 2025 – Present",
  },
  {
    role: "Software Engineer Intern",
    company: "Capital One",
    location: "McLean, VA",
    dates: "Jun. 2026 – Aug. 2026",
  },
  {
    role: "Lead Platform Engineer (Volunteer)",
    company: "Patina Network",
    location: "New York, NY",
    dates: "May. 2026 – Present",
  },
  {
    role: "Software Engineer Intern/Co-op (Fall, Spring)",
    company: "Integral Ad Science",
    location: "New York, NY",
    dates: "Sep. 2025 – May. 2026",
  },
  {
    role: "Software Engineer Intern/Co-op (Summer)",
    company: "Integral Ad Science",
    location: "New York, NY",
    dates: "Jun. 2025 – Aug. 2025",
  },
  {
    role: "Lead Software Engineer (Volunteer)",
    company: "Patina Network",
    location: "New York, NY",
    dates: "Jan. 2025 – Jan. 2026",
  },
  {
    role: "Jr. Software Engineer",
    company: "Synergy Prep",
    location: "New York, NY",
    dates: "Jun. 2023 – Feb. 2025",
  },
  {
    role: "Teaching Assistant",
    company: "Hunter College",
    location: "New York, NY",
    dates: "Aug. 2023 – Dec. 2023",
  },
];

export default function Experience() {
  return (
    <div
      id="experience"
      className="w-full flex flex-col items-center my-24 px-4"
    >
      <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Experience</h2>
      <div className="flex w-full max-w-3xl flex-col gap-4">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="rounded-lg border border-l-4 border-gray-800 border-l-purple-500 bg-white/5 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.dates}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm text-gray-400">
              <span className="italic">{exp.company}</span>
              <span>{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

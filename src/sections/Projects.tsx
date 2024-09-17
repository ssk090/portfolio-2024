import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Infosys Ltd.",
    year: "2020 - 2023",
    title: "Senior Systems Engineer",
    results: [
      {
        title:
          "Enhanced a client’s dashboard with React JS, improving usability by 60%",
      },
      {
        title:
          "Developed Angular code, integrated APIs, and delivered successful projects",
      },
      {
        title:
          "Led a 10-member team on a full-stack project using Angular and Spring Boot",
      },
    ],
    link: "https://drive.google.com/file/d/1Qd1jUONkFZe2ePuAk14_aJY8TQzpd7s0/view?usp=sharing",
  },
  {
    company: "Altir India Pvt. Ltd.",
    year: "2023 - Present",
    title: "Software Engineer",
    results: [
      {
        title:
          "Fixed bugs and implemented new features using React and Typescript",
      },
      {
        title:
          "Learnt React Native and implemented a cross-platform mobile app",
      },
      {
        title:
          "Collaborated with cross-functional teams to deliver high-quality code",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Career Highlights"
          description="Explore how I turned challenges into impactful outcomes across various companies"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16"> */}
              <div className="lg:gap-16">
                <div className="pb-16">
                  <div className="bg-gradient-to-r from-slate-600 to-sky-700 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>Experience Letter</span>
                      <ArrowUpRight className="size-5" />
                    </button>
                  </a> */}
                </div>
                {/* <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

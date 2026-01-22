import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      title: "Zomato Restaurant Data Analytics - Customer Behavior Analysis",
      description:
        " Analyzed Zomato restaurant data using Python to explore patterns in customer preferences, restaurant categories, pricing ranges, and ordering modes through exploratory data analysis",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "EDA",        
      ],
      liveLink: "https://github.com/ijaihari/Zomato-Restaurant-Data-Analytics-Customer-Behavior-Analysis/blob/main/Zomato%20Restaurant%20Data%20Analytics%20-%20Customer%20Behavior%20Analysis.ipynb",
      githubLink: "https://github.com/ijaihari/Zomato-Restaurant-Data-Analytics-Customer-Behavior-Analysis",
    },
    {
      title: "Tamil Nadu SIR 2026 – Voter Roll Impact Analysis",
      description:
        "Analyzed constituency-level voter roll changes using statistical methods and machine learning models to uncover patterns and data anomalies.",
      tech: [
        "SQLite",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Logistic Regression",
        "EDA",        
      ],
      liveLink: "https://github.com/ijaihari/Tamil-Nadu-SIR-2026-Draft-Voter-Roll-Impact-Analysis/blob/main/notebooks/Tamil%20Nadu%20SIR%202026%20Draft%20Voter%20Roll%20Impact%20Analysis.ipynb",
      githubLink: "https://github.com/ijaihari/Tamil-Nadu-SIR-2026-Draft-Voter-Roll-Impact-Analysis",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Project Works"
          subtitle="A collection of what I created"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

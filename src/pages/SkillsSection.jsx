import { SectionTitle } from "../components/SectionTitle";
import { SkillPills } from "../components/SkillPills";

export function SkillsSection() {
    const skillsData = [
        {
            title: "Data Manipulation & Analysis",
            skills: ["Excel", "SQL", "SQLite", "Python", "Pandas", "NumPy"],
        },
        {
            title: "Data Visualization",
            skills: [
                "Power BI",
                "Cognos Analytics",
                "Matplotlib",
                "Seaborn",
            ],
        },
        {
            title: "Applied Machine Learning",
            skills: ["Linear Regression", "Logistic Regression"]
        },
        {
            title: "Statistics & Analytics",
            skills: [
                "Exploratory Data Analysis",
                "Hypothesis Testing",
                "Descriptive Statistics",
                "Inferential Statistics",
            ],
        },
        {
            title: "Tools & Workflow",
            skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code",],
        },
    ];

    return (
        <section
            id="skills"
            className="
        py-12 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
        scroll-mt-10
      "
        >
            <div className="max-w-6xl mx-auto">

                <SectionTitle
                    title="Tech Stack"
                    subtitle="The tools and tech I work with every day"
                />

                {/* Pills layout */}
                <div className="flex flex-col gap-8">
                    {skillsData.map((group) => (
                        <SkillPills
                            key={group.title}
                            title={group.title}
                            skills={group.skills}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

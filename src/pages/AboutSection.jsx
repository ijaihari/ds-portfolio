import { SectionTitle } from "../components/SectionTitle";
import { ProfileIntro } from "../components/ProfileIntro";
import { AcademicCard } from "../components/AcademicCard";
import { SubTitle } from "../components/SubTitle";
import { ProfessionalExperienceCard } from "../components/ProfessionalExperienceCard";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-12 sm:py-16 lg:py-20 scroll-mt-10
                 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">

                {/* ===== Section Title ===== */}
                <SectionTitle
                    title="Meet The Analyst"
                    subtitle="Get to know the person behind the data"
                />

                {/* ===== Profile Intro ===== */}
                <ProfileIntro
                    imageSrc="/bw.png"
                    description={`Hi, I'm Jai Hari Nataraj, and I work with data to make things easier to understand.
                    I use tools like Excel, SQL, Python, Pandas, NumPy, Matplotlib, Seaborn, Power BI and Cognos Analytics
                    to clean data, build dashboards, and create insights.

                    Right now, I’m learning the IBM Data Analyst Professional Certificate and applying what I learn through real-world projects.

                    I’m also building a stronger foundation in data analytics, including statistical methods, machine learning fundamentals, and advanced Python workflows.`}
                />

                {/* ===== Professional Journey ===== */}

                {/* <div className="mt-16 lg:mt-20">
                    <SubTitle>
                        Professional Journey
                    </SubTitle>

                    <ProfessionalExperienceCard
                        role="Data Analyst Intern"
                        experienceYears="6 months"
                        company="ABC Analytics"
                        period="Jun 2024 – Dec 2024"
                        points={[
                            "Built dashboards using Power BI and SQL",
                            "Analyzed trends to support business decisions",
                            "Presented insights to senior stakeholders",
                        ]}
                    />
                </div> */}

                {/* ===== Academic Background ===== */}
                <div className="mt-16 lg:mt-20">
                    <SubTitle>
                        Academic Background
                    </SubTitle>

                    <AcademicCard
                        degree="Bachelor of Engineering, EEE"
                        institution="Anna University, AAA College of Engineering and Technology"
                        period="August 2020 – June 2024"
                        points={[
                            "Student Representative", "IIC Student Innovation coordinator",
                            "President of Department Association", "Secured 1st Rank in III & IV Semester Examinations of the Anna University held in Academic year 2022 - 2023"
                        ]}
                    />
                </div>

            </div>
        </section>
    );
}

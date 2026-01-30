import { SectionTitle } from "../components/SectionTitle";
import { SkillPills } from "../components/SkillPills";

export function SkillsSection() {
    
const skillsData = [
    {
        title: "Programming & Querying",
        skills: ["Python", "SQL", "SQLite"],
    },
    {
        title: "Analytical Libraries",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
        title: "BI & Reporting",
        skills: ["Power BI", "Microsoft Excel"],
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
        title: "Version Control & Tools",
        skills: ["Git", "GitHub", "Jupyter Notebook"],
    },
];

/* const skillsData = [
    {
        title: "Programming & Querying",
        skills: ["Python", "SQL", "SQLite"],
    },
    {
        title: "Analytical Libraries",
        skills: [
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "scikit-learn",
        ],
    },
    {
        title: "BI & Reporting",
        skills: [
            "Power BI",
            "Microsoft Excel",
        ],
    },
    {
        title: "Statistics & Analytics",
        skills: [
            "Exploratory Data Analysis (EDA)",
            "Descriptive Statistics",
            "Inferential Statistics",
            "Probability Distributions",
            "Hypothesis Testing",
            "A/B Testing",
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forest",
            "Feature Engineering",
            "Model Evaluation (Accuracy, Precision, Recall, F1, ROC-AUC)",
            "Cross-Validation",
        ],
    },
    {
        title: "Time Series & Forecasting",
        skills: [
            "Trend & Seasonality Analysis",
            "Time Series Decomposition",
            "Moving Averages",
            "ARIMA (Basics)",
            "Demand & Sales Forecasting",
        ],
    },
    {
        title: "Data Storytelling & Business Analysis",
        skills: [
            "KPI Analysis",
            "Business Insights & Recommendations",
            "Dashboard Design",
            "Stakeholder Communication",
            "Data-Driven Decision Making",
        ],
    },
    {
        title: "Version Control & Tools",
        skills: [
            "Git",
            "GitHub",
            "Jupyter Notebook",
            "VS Code",
        ],
    },
];
 */

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

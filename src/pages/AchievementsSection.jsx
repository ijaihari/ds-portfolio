import { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { CertificationCard } from "../components/CertificationCard";
import { AchievementPostCard } from "../components/AchievementPostCard";

export function AchievementsSection() {
  const certifications = [
    {
      title: "Excel Basics for Data Analytics",
      issuer: "IBM",
      date: "Nov 8, 2025",
      image: "certificates/excel-essentials.png",
      certificateLink: "https://coursera.org/share/c636f520c7f90c31ff6d9ee3827af6c7",
      credLink: "https://www.credly.com/badges/065a731d-549c-4b92-9879-f72354c8c6ba/public_url",
      
    },
    {
      title: "Data Visualization and Dashboards with Excel and Cognos",
      issuer: "IBM",
      date: "Nov 18, 2025",
      image: "certificates/data-visual-dashboard.png",
      certificateLink: "https://coursera.org/share/3ec21cfb061cce831446f4b4419f8e2c",
      credLink: "https://www.credly.com/badges/a4e96e38-19d0-4861-9f79-35c5c74a807a/public_url",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Nov 27, 2025",
      image: "certificates/python-data-science.png",
      certificateLink: "https://coursera.org/share/c4a910a480dd21b18e614ea18c2ece1a",
      credLink: "https://www.credly.com/badges/5f87b603-5d6f-416c-86d0-b9f68b725632/public_url",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      date: "Dec 27, 2025",
      image: "certificates/sql.png",
      certificateLink: "https://coursera.org/share/e5d1fbd7647733349b854c85056dc874",
      credLink: "https://www.credly.com/badges/d7dbf3a2-b382-4091-a568-82d5c4290eed/public_url",
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "Dec 27, 2025",
      image: "certificates/data-analysis.png",
      certificateLink: "https://coursera.org/share/c555f7988e274c89b197b6ee77aa08c8",
      credLink: "https://www.credly.com/badges/5fba9f3d-9df8-45ab-ba82-b420b8f540d7/public_url",
    },

  ];

  const achievements = [
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },
    {
      title: "Completed IBM Data Analyst Program",
      description: "Shared my journey and key takeaways.",
      date: "March 2025",
      image: "certificates/image.png",
      postLink: "",
    },

  ];

  // 👇 show 1 row initially = 3 cards
  const ROW_SIZE = 3;
  const [visibleRows, setVisibleRows] = useState(1);

  const visiblePosts = achievements.slice(0, visibleRows * ROW_SIZE);
  const canShowMore = visiblePosts.length < achievements.length;

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Achievements"
          subtitle="Small wins on my long journey"
        />

        {/* ===== Certifications ===== */}
        <div className="mb-14">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-6">
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>

        {/* ===== Achievement Posts ===== */}
        {/* <div>
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-6">
            Highlights & Posts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visiblePosts.map((post, index) => (
              <AchievementPostCard key={index} {...post} />
            ))}
          </div>

          {canShowMore && (
            <button
              onClick={() => setVisibleRows((r) => r + 1)}
              className="
                mt-6
                mx-auto
                block
                rounded-2xl cursor-pointer
                px-6 py-2.5 text-sm
                border border-black text-white bg-[#181717] shadow-sm backdrop-blur-md
              hover:bg-white hover:text-black transition-all duration-300
              "
            >
              View more posts
            </button>
          )}
        </div>
 */}
      </div>
    </section>
  );
}

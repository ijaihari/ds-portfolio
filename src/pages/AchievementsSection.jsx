import { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { CertificationCard } from "../components/CertificationCard";
import { AchievementPostCard } from "../components/AchievementPostCard";

export function AchievementsSection() {
  const certifications = [
    {
      title: "IBM Certified Data Analyst",
      issuer: "IBM",
      date: "23 March 2025",
      image: "posts/image.png",
      credLink: "",
    },
    {
      title: "IBM Certified Data Analyst",
      issuer: "IBM",
      date: "23 March 2025",
      image: "posts/image.png",
      credLink: "",
    },
    {
      title: "IBM Certified Data Analyst",
      issuer: "IBM",
      date: "23 March 2025",
      image: "posts/image.png",
      credLink: "",
    },
    {
      title: "IBM Certified Data Analyst",
      issuer: "IBM",
      date: "23 March 2025",
      image: "posts/image.png",
      credLink: "",
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
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Achievements"
          subtitle="Certifications and public highlights"
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
        <div>
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

      </div>
    </section>
  );
}

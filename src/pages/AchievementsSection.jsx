import { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { CertificationCard } from "../components/CertificationCard";
import { AchievementPostCard } from "../components/AchievementPostCard";

export function AchievementsSection() {
  const certifications = [
    {
      title: "IBM Data Analyst Professional",
      issuer: "IBM",
      date: "March 23, 2026",
      image: "certificates/ibm_da.png",
      certificateLink: "https://coursera.org/share/fe28efd4ba08bee5b3a0ecf8c050f393",
      credLink: "https://www.credly.com/badges/24599382-1740-49db-9744-6ab75d84d3cc/public_url",

    },{
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "May 22, 2023",
      image: "certificates/az900.png",
      certificateLink: "https://learn.microsoft.com/api/credentials/share/en-us/ijaihari/4C0B7063BC4F3066?sharingId=62199EAB5ADCB2FD",
      credLink: "https://www.credly.com/badges/10889d36-5636-4614-b989-514ffc7467e5/public_url",

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

export function SkillPills({ title, skills = [] }) {
  return (
    <div className="flex flex-col gap-3">
      
      {/* Category title */}
      <h3 className="text-lg sm:text-xl font-semibold text-black">
        {title}
      </h3>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-3 py-1.5
              text-xs sm:text-sm border border-gray-400
              font-medium
              rounded-full
              bg-gray-100 text-gray-800
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

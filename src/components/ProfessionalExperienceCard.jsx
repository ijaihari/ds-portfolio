export function ProfessionalExperienceCard({
  role,
  company,
  period,
  experienceYears,
  points,
}) {
  return (
    <div
      className="border border-gray-300 rounded-2xl mb-4
                 p-5 sm:p-6 lg:p-8
                 transition-shadow
                 hover:shadow-md" 
    >
      {/* Header */}
      <div className="mb-3">
        <h3
          className="text-lg sm:text-xl lg:text-2xl
                     font-bold text-black
                     flex flex-wrap items-baseline gap-2"
        >
          <span>{role}</span>
          <span
            className="text-sm sm:text-sm
                       font-medium text-gray-500"
          >
            · {experienceYears}
          </span>
        </h3>

        <p
          className="text-sm sm:text-base
                     text-gray-600 mt-1"
        >
          <span className="font-medium text-gray-800">
            {company}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span>{period}</span>
        </p>
      </div>

      {/* Points */}
      <ul
        className="list-disc pl-4
                   space-y-2
                   text-sm sm:text-base
                   text-gray-800"
      >
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

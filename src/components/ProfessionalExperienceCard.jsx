export function ProfessionalExperienceCard({
  role,
  company,
  period,
  experienceYears,
  points,
}) {
  return (
    <div
      className="
        border border-gray-300 rounded-2xl mb-4
        p-5 sm:p-6 lg:p-8
      "
    >
      {/* Header */}
      <div className="mb-3">

        {/* Role + Period */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <h3
            className="
              text-lg sm:text-xl lg:text-2xl
              font-bold text-black
            "
          >
            {role}
          </h3>

          <span
            className="
              text-sm
              font-medium
              text-gray-500
              sm:whitespace-nowrap
            "
          >
            {period}
          </span>
        </div>

        {/* Company + Experience Years */}
        <p
          className="
            text-sm sm:text-base
            text-gray-600 mt-1
          "
        >
          <span className="font-semibold text-gray-800">
            {company}
          </span>
          <span className="mx-0.5"> ({experienceYears})</span>
        </p>
      </div>

      {/* Points */}
      <ul
        className="
          list-disc pl-4
          space-y-2
          text-sm sm:text-base
          text-gray-800
        "
      >
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

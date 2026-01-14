export function AcademicCard({
  degree,
  institution,
  period,
  points,
}) {
  return (
    <div className="border border-gray-300 rounded-2xl
                    p-5 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row
                      sm:items-center sm:justify-between
                      gap-1 sm:gap-2 mb-4">

        <h3 className="text-lg sm:text-xl lg:text-2xl
                       font-bold text-black">
          {degree}
        </h3>

        <span className="text-sm sm:text-sm
                       font-medium text-gray-500">
          {period}
        </span>
      </div>

      <p className="text-sm sm:text-base
                    text-gray-600 mb-4">
        {institution}
      </p>

      <ul className="list-disc pl-4
                     space-y-2
                     text-sm sm:text-base
                     text-gray-800">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

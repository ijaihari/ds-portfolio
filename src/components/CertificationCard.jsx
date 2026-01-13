export function CertificationCard({ title, subtitle, date, image }) {
  return (
    <div
      className="flex items-center gap-4
                 border border-gray-300
                 rounded-2xl
                 p-4 sm:p-5
                 bg-white"
    >
      {/* Badge */}
      <img
        src={image}
        alt={`${title} ${subtitle}`}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                   object-contain shrink-0"
        loading="lazy"
      />

      {/* Text */}
      <div>
        <h4 className="text-sm sm:text-base
                       font-semibold text-black leading-snug">
          {title}
          <br />
          {subtitle}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {date}
        </p>
      </div>
    </div>
  );
}

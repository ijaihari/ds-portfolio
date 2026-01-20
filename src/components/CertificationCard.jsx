export function CertificationCard({
  title,
  issuer,
  date,
  image,
  credLink,
  certificateLink, // NEW PROP
}) {
  return (
    <div className="group border border-gray-200 rounded-xl p-4 bg-white flex flex-col">
      
      {/* Image */}
      <div className="overflow-hidden rounded-lg border border-gray-200 mb-3">
        <img
          src={image}
          alt={title}
          className="
            w-full aspect-[4/3] object-contain
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-black leading-snug mb-1">
        {title}
      </h3>

      {/* Issuer + Date */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">
          {issuer}
        </span>

        {date && (
          <span className="text-[11px] text-gray-400 whitespace-nowrap">
            {date}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-row gap-2">
        {/* Certificate Link */}
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full text-center rounded-xl
              border border-gray-300 text-black bg-white
              hover:border-black transition-all duration-300
              py-2 text-sm font-semibold
            "
          >
          View Certificate
          </a>
        )}

        {/* Credential Link */}
        <a
          href={credLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full text-center rounded-xl
            border border-blue-800 text-white bg-blue-800
             hover:bg-blue-700 transition-all duration-300
            py-2 text-sm font-semibold
          "
        >
         View Credential
        </a>
      </div>
    </div>
  );
}

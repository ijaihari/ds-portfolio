import { FiExternalLink } from "react-icons/fi";

export function CertifiedCard({ title, date, image, credLink }) {
  return (
    <div
      className="
        relative
        flex items-center gap-4
        border border-gray-300
        rounded-2xl
        p-4 sm:p-3
        bg-white
      "
    >
      {/* View button (TOP RIGHT) */}
      {credLink && (
        <a
          href={credLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View credential"
          className="
            absolute top-2 right-2
            w-8 h-8
            flex items-center justify-center
            rounded-full
            bg-white/90 text-black
            border border-gray-300
            backdrop-blur-sm
            hover:bg-gray-100 transition-all duration-300
          "
        >
          <FiExternalLink size={14} />
        </a>
      )}

      {/* Badge */}
      <img
        src={image}
        alt={title}
        className="
          w-12 h-12
          sm:w-14 sm:h-14
          lg:w-16 lg:h-16
          object-contain shrink-0
        "
        loading="lazy"
      />

      {/* Text */}
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-black leading-snug">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {date}
        </p>
      </div>
    </div>
  );
}

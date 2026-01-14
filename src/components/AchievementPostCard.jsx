export function AchievementPostCard({
  title,
  description,
  image,
  date,
  postLink,
}) {
  return (
    <div className="group border border-gray-200 rounded-xl p-4 bg-white flex flex-col">

      {/* Image wrapper with overlay */}
      <div className="relative overflow-hidden rounded-lg border border-gray-200 mb-3">
        
        {/* Date pill (TOP LEFT) */}
        {date && (
          <span
            className="
              absolute top-2 right-2 z-10
              px-3 py-1
              text-[11px] font-medium
              rounded-full
              bg-white/90 text-gray-700
              border border-gray-300
              backdrop-blur-sm
            "
          >
            {date}
          </span>
        )}

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="
            w-full aspect-[4/3] object-cover
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
          loading="lazy"
        />
      </div>

      {/* Content */}
      <h3 className="text-sm font-semibold text-black mb-1">
        {title}
      </h3>

      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
        {description}
      </p>

      {/* Button */}
      <a
        href={postLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-auto w-full text-center rounded-xl
          border border-gray-300
          py-2 text-xs font-semibold
          hover:border-black transition-all duration-300
        "
      >
        View Post
      </a>
    </div>
  );
}

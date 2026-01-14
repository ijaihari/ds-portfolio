import { FaGithub } from "react-icons/fa6";

export function ProjectCard({
    title,
    description,
    tech = [],
    liveLink,
    githubLink,
}) {
    const titleHref = liveLink || githubLink;

    return (
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white flex flex-col shadow-xs
">

            {/* Title */}
            {titleHref ? (
                <a
                    href={titleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold text-black mb-2 hover:underline "
                >
                    {title}
                </a>
            ) : (
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {title}
                </h3>
            )}

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-4">
                {description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((item, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-100 text-gray-800 font-medium border border-gray-300"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Buttons */}
            {(liveLink || githubLink) && (
                <div className="mt-auto grid grid-cols-2 gap-3">

                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                w-full
                text-center
                rounded-2xl
                border border-black text-white bg-[#181717] shadow-sm backdrop-blur-md
              hover:bg-white hover:text-black transition-all duration-300
                px-4 py-2.5 text-sm font-semibold
              "
                        >
                            View Project
                        </a>
                    )}

                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                w-full
                flex items-center justify-center gap-2
                rounded-2xl
                text-black border border-gray-300
                px-4 py-2.5 hover:border-black transition-all duration-300
                text-sm font-semibold hover:shadow-sm hover:backdrop-blur-md
              "
                        >
                            <FaGithub className="text-lg" />
                            GitHub
                        </a>
                    )}

                </div>
            )}
        </div>
    );
}

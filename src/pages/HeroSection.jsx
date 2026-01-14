import { TbExternalLink } from "react-icons/tb";
import { FaFilePdf, FaLinkedin, FaGithub } from "react-icons/fa6";
/* px-4 sm:px-6 pt-16 sm:py-20 */
export function HeroSection() {
  return (
    <section id="home" className="flex items-center justify-center w-full sm:min-h-screen px-4 sm:px-6 scroll-mt-10">
      <div className="w-full max-w-6xl flex flex-col items-center text-center pt-30 pb-10 sm:pt-0 sm:pb-0 leading-tight">

        {/* Project link */}
        <a href="#" className="mb-5">
          <p className="flex items-center justify-center gap-1 
                        text-sm sm:text-lg 
                        font-semibold italic underline tracking-tight">
            Checkout my latest project <TbExternalLink />
          </p>
        </a>

        {/* Greeting */}
        <h2 className="font-bold text-xl sm:text-3xl tracking-tight">
          Hello World, I'm JAI HARI
        </h2>

        {/* Main headline */}
        <h1 className="font-bold 
                       text-[46px] sm:text-[84px] lg:text-[110px]
                       tracking-[-2px] sm:tracking-[-4px] lg:tracking-[-5px]
                       py-2 gradient-text">
          A Data Analyst
        </h1>

        {/* Subtitle */}
        <h2 className="text-[#64748B] 
                       text-sm sm:text-md
                       font-medium italic tracking-tight 
                       pb-6 max-w-4xl sm:max-w-3xl mx-auto leading-relaxed">
          "I uncover patterns, build visual stories, and help transform data into confident decisions"
        </h2>

        {/* Hero buttons  grid-cols-1 sm: */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 
                        w-full max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
          <a
            href="https://www.jaihari.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            <FaFilePdf /> Resume
          </a>

          <a
            href="https://www.linkedin.com/in/ijaihari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/ijaihari"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            <FaGithub /> GitHub
          </a>

        </div>
      </div>
    </section>
  );
}
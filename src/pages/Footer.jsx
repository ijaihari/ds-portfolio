export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-16">
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-6
          flex justify-center
          text-sm
          text-gray-600
        "
      >
        <span>
          © {year} | Designed &amp; Developed by{" "}
          <a
            href="https://www.linkedin.com/in/ijaihari/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-medium text-black
              hover:underline underline-offset-4
            "
          >
            Jai Hari Nataraj
          </a>
        </span>
      </div>
    </footer>
  );
}

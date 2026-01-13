import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastHome, setPastHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      if (!home) return;

      const threshold = home.offsetHeight - 80;
      setPastHome(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <div
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50
                   items-center gap-1 px-1 py-1
                   text-sm font-semibold
                   backdrop-blur-sm  bg-gray-300/20
                   border border-gray-300
                   rounded-full"
      >
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} className="nav-btn">
            {item.label}
          </a>
        ))}
      </div>

      {/* ================= Mobile / Tablet Navbar ================= */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50
                      bg-gray-300/20 backdrop-blur-md
                      border-b border-gray-300">

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2">

          {/* LEFT AREA */}
          <div className="px-3 transition-all duration-300">
            {!pastHome ? (
              /* 🔹 Above Home → italic <J> */
              <span className="text-gray-900 text-2xl italic font-bold tracking-tight">
                JAI
              </span>
            ) : (
              /* 🔹 Below Home → Name + Role */
              <div className="flex flex-col leading-tight">
                <span className="text-md font-semibold tracking-tight">
                  Jai Hari Nataraj
                </span>
                <span className="text-sm text-gray-500 tracking-tight">
                  Data Analyst
                </span>
              </div>
            )}
          </div>

          {/* Menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Vertical menu */}
        {open && (
          <div className="flex flex-col gap-1 px-4 pb-4">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-item"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

import { useState } from "react";
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

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <div
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50
                   items-center gap-1 px-1 py-1
                   text-sm font-semibold
                   backdrop-blur-sm bg-white/40
                   border border-[#e2e8f0c0]
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
                      bg-white/70 backdrop-blur-md
                      border-b border-[#e2e8f0c0]">

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-col">
            <span className="px-3 text-md font-semibold tracking-tight">
              Jai Hari Nataraj
            </span>
            <span className="px-3 text-gray-500 text-sm font-base tracking-tight">
              Data Analyst
            </span>
          </div>

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

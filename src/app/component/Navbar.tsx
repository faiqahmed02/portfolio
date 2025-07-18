import React, {useEffect, useState} from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listener for screen size changes using matchMedia
    const mediaQuery = window.matchMedia("(max-width: 1023px)"); // Tailwind lg breakpoint = 1024px

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
      if (!e.matches) {
        setIsMenuOpen(false); // Close menu if switching to desktop
      }
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Add listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="fixed top-0 w-full z-20 bg-[#111827] text-white shadow-md"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <h1 className="text-xl font-bold select-none">Faiq Ahmed</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium">
          {[
            {label: "Home", href: "#hero"},
            {label: "Experience", href: "#experience"},
            {label: "Projects", href: "#projects"},
            {label: "Skills", href: "#skills"},
            {label: "Contact", href: "#contact"},
          ].map(({label, href}) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-indigo-500 transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button for mobile */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="lg:hidden flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`block h-1.5 w-6 bg-white rounded transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1.5 w-6 bg-white rounded transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1.5 w-6 bg-white rounded transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          id="mobile-menu"
          className={`lg:hidden bg-[#111827] overflow-hidden transition-max-height duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-6 px-6 pb-6 text-lg font-medium">
            {[
              {label: "Home", href: "#hero"},
              {label: "Experience", href: "#experience"},
              {label: "Projects", href: "#projects"},
              {label: "Skills", href: "#skills"},
              {label: "Contact", href: "#contact"},
            ].map(({label, href}) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-white hover:text-indigo-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

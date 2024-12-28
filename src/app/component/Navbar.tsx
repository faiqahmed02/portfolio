import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  // State to manage menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Toggle the menu visibility for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white p-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">Faiq Ahmed</h1>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="lg:hidden flex flex-col space-y-2"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* Desktop Menu (visible on large screens) */}
        <ul
          className={`hidden lg:flex space-x-4 items-center transition-transform duration-300`}
        >
          <li>
            <a href="#hero" className="hover:text-accent transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-accent transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu (appears when menu is toggled) */}
      {screenSize.width <= 700 && isMenuOpen && (
        <div className="lg:hidden bg-primary text-white p-4 mt-4 rounded-md shadow-md">
          <ul className="space-y-4">
            <li>
              <a
                href="#hero"
                className="block hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); // Close the menu after scrolling
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-10 backdrop-blur-lg bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("home")}>
              <h1 className="text-2xl font-bold">My Portfolio</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
              <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
              <NavLink onClick={() => scrollToSection("education")}>Education</NavLink>
              <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
              <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
              <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={`${isOpen ? "hidden" : "inline-flex"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path className={`${isOpen ? "inline-flex" : "hidden"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("education")}>Education</NavLink>
          <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
          <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => (
  <span className="hover:bg-gray-700 hover:bg-opacity-50 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer block" onClick={onClick}>
    {children}
  </span>
);

export default Navbar;

import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = {
    Store: "https://www.apple.com/store",
    Mac: "https://www.apple.com/mac",
    iPhone: "https://www.apple.com/iphone",
    Entertainment: "https://www.apple.com/services/",
    Accessories: "https://www.apple.com/shop/accessories/all",
    Support: "https://support.apple.com",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full py-3 sm:py-5 px-6 lg:px-32 flex justify-between items-center fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm">
        <nav className="flex w-full items-center justify-between">
          {/* Apple Logo - Left aligned with hover effect */}
          <a
            href="https://www.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-0 hover:invert transition-all duration-200"
          >
            <img src={appleImg} alt="Apple" width={14} height={44} />
          </a>

          {/* Desktop Navigation - Center aligned */}
          <div className="hidden lg:flex flex-1 justify-center mx-2 lg:mx-4">
            {navLists.map((nav) => (
              <a
                key={nav}
                href={navLinks[nav] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base cursor-pointer text-gray-400 hover:text-teal-200 transition-all px-2 lg:px-3"
              >
                {nav}
              </a>
            ))}
          </div>

          {/* Right Section - Icons & Hamburger */}
          <div className="flex items-center max-sm:mx-44 md:mx-80 lg:mx-0 gap-9">
            {/* Search and Bag icons - hidden when mobile menu is open */}
            {!isMenuOpen && (
              <>
                <a
                  href="https://www.apple.com/search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={searchImg}
                    alt="search"
                    width={18}
                    height={18}
                    className="sm:h-5 sm:w-5"
                  />
                </a>
                <a
                  href="https://www.apple.com/shop/bag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={bagImg}
                    alt="bag"
                    width={18}
                    height={18}
                    className="sm:h-5 sm:w-5"
                  />
                </a>
              </>
            )}
            {/* Mobile Hamburger Button - hidden on desktop  */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-700 z-40 shadow-2xl">
          <div className="flex flex-col py-4 mx-4">
            {navLists.map((nav) => (
              <div
                key={nav}
                className="flex items-center justify-center px-4 py-3 border-b border-gray-700/30 last:border-b-0"
              >
                <a
                  href={navLinks[nav] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg cursor-pointer items-center justify-center max-sm:mx-36 md:mx-72 text-gray-300 hover:text-teal-200 transition-all duration-200 flex-1"
                >
                  {nav}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-[60px]"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;

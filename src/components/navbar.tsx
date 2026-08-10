import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // State open/close for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Open close menu functions
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // List of navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },

    { name: 'The House', href: '#the-house' },
    { name: 'Airbnb', href: '#airbnb' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-baja-light px-8 py-6 shadow-sm">
      {/* Logo / Title */}
      <div className="text-2xl font-semibold font-serif tracking-widest text-baja-blue z-50">
        BAJA SURF HOUSE
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-lg font-serif font-semibold tracking-widest uppercase text-baja-blue">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="inline-block transition-all duration-300 hover:scale-105 hover:text-baja-green"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="text-baja-blue focus:outline-none md:hidden z-50 transition-transform duration-300 hover:scale-110"
        onClick={toggleMenu}
      >
        {/* X ICON*/}
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-baja-light shadow-xl transition-all duration-300 ease-in-out md:hidden flex flex-col items-center overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg font-serif font-semibold tracking-widest uppercase text-baja-blue">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="inline-block transition-colors duration-300 hover:text-baja-green"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

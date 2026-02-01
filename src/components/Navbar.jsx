import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleLang = () => setLang(lang === "EN" ? "FR" : "EN");

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      <div className="container">
        {/* Logo (Left) */}
        <a className="navbar-brand" href="#home">
          SunCity
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          
          {/* Center Nav Items */}
          <ul className="navbar-nav mx-lg-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#plans" onClick={closeMenu}>
                Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#coverage" onClick={closeMenu}>
                Coverage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-2">
            {/* Language Toggle */}
            <button
              className="btn btn-outline-light bg-dark btn-sm"
              onClick={toggleLang}
            >
              <i className="fa-solid fa-language me-1"></i>
              {lang}
            </button>

            {/* Get Started Button */}
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

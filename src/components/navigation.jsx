import React, { useState } from "react";

const Navigation = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={`${process.env.PUBLIC_URL}/images/logoifi.png`} alt="Logo" className="logo-img" />
            <span className="brand-text">School IFI</span>  
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#programs" className="page-scroll">Programs</a></li>
            <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
            <li><a href="#team" className="page-scroll">Team</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger menu button */}
        <button
          type="button"
          className="navbar-toggle"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        {/* Mobile slide-out menu */}
        <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>&times;</button>
          <ul className="nav navbar-nav">
            <li><a href="#about" className="page-scroll" onClick={toggleMenu}>About</a></li>
            <li><a href="#programs" className="page-scroll" onClick={toggleMenu}>Programs</a></li>
            <li><a href="#testimonials" className="page-scroll" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#team" className="page-scroll" onClick={toggleMenu}>Team</a></li>
            <li><a href="#contact" className="page-scroll" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
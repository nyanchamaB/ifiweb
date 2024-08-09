import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adjust timing if necessary
  };

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    navigate('/');
    setTimeout(() => {
      document.querySelector('#header')?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adjust timing if necessary
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="/" className="navbar-brand page-scroll" onClick={handleLogoClick}>
            <img src={`${process.env.PUBLIC_URL}/images/logoifi.png`} alt="Logo" className="logo-img" />
            <span className="brand-text">School IFI</span>
          </a>
        </div>

        <div className="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" onClick={() => handleNavClick('#about')}>About</Link></li>
            <li><Link to="/" onClick={() => handleNavClick('#programs')}>Programs</Link></li>
            <li><Link to="/" onClick={() => handleNavClick('#testimonials')}>Testimonials</Link></li>
            <li><Link to="/" onClick={() => handleNavClick('#team')}>Team</Link></li>
            <li><Link to="/" onClick={() => handleNavClick('#contact')}>Contact</Link></li>
          </ul>
        </div>

        <button type="button" className="navbar-toggle" onClick={toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>&times;</button>
          <ul className="nav navbar-nav">
            <li><Link to="/" onClick={() => { toggleMenu(); handleNavClick('#about'); }}>About</Link></li>
            <li><Link to="/" onClick={() => { toggleMenu(); handleNavClick('#programs'); }}>Programs</Link></li>
            <li><Link to="/" onClick={() => { toggleMenu(); handleNavClick('#testimonials'); }}>Testimonials</Link></li>
            <li><Link to="/" onClick={() => { toggleMenu(); handleNavClick('#team'); }}>Team</Link></li>
            <li><Link to="/" onClick={() => { toggleMenu(); handleNavClick('#contact'); }}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

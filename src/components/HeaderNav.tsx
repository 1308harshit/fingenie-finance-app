import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-nav">
      <div className="nav-container">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="url(#gradient)" />
            <path d="M12 9H20V12H15V15H19V18H15V23H12V9Z" fill="white" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">Fingenie</span>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/terms-and-conditions" onClick={closeMenu}>Terms & Conditions</Link>
          <Link to="/policy" onClick={closeMenu}>Privacy Policy</Link>
          <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="https://github.com/1308harshit/fingenie-finance-app" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;

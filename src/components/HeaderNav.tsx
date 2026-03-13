import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
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
        <nav className="nav-links">
          <Link to="/faq">FAQ</Link>
          <a href="#features">Features</a>
          <a href="#github">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;

import { Link } from 'react-router-dom';
import PhoneStack from './PhoneStack';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="ai-badge">AI-powered finance assistant</div>
          
          <h1 className="hero-title">
            Finally, navigate your finances with AI.
          </h1>
          
          <p className="hero-subtitle">
            Experience intelligent budgeting with AI-powered insights, smart transaction categorization, 
            anomaly detection, and accurate cashflow forecasting—all in one place.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-primary">Get Started with Fingenie</button>
            <button className="btn-secondary">Explore AI Insights</button>
          </div>
          
          <div className="platform-links">
            <span>Available on</span>
            <div className="platform-icons">
              <a href="#" className="platform-icon" title="Google Play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.523 7.39l-3.124 3.124-3.124-3.124L4 .5v23l7.275-6.89 3.124-3.124 3.124 3.124L24 23.5V.5z"/>
                </svg>
              </a>
              <a href="#" className="platform-icon" title="App Store">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12z"/>
                  <path d="M9 8h6M9 12h6M9 16h4"/>
                </svg>
              </a>
              <a href="#" className="platform-icon" title="Web App">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </a>
              <a href="#" className="platform-icon" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="platform-icon" title="Documentation">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/policy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
            <a href="#github">GitHub</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <PhoneStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;

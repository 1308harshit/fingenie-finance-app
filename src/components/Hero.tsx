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
            anomaly detection, and accurate cashflow forecasting all in one place.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-primary">Get Started with Fingenie</button>
            <button className="btn-secondary">Explore AI Insights</button>
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

import './LegalPage.css';

const TermsAndConditions = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="header">
          <div className="logo">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
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
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before using Fingenie. By using our service, you agree to these terms.</p>
        </div>

        <div className="last-updated">
          Last Updated: March 12, 2026
        </div>

        <div className="contact-info">
          <p><strong>Questions about these terms?</strong></p>
          <p>Contact us at: <a href="mailto:support@fingenie.vurlex.in">support@fingenie.vurlex.in</a></p>
        </div>

        <div className="section">
          <h2>1. Agreement to Terms</h2>
          <p>By downloading, installing, or using Fingenie (the "Application"), you agree to be bound by these Terms and Conditions. Fingenie is provided by Vurlex Technologies (the "Company").</p>
          
          <h3>Service Description</h3>
          <p>Fingenie is an AI-powered financial management application that provides:</p>
          <ul>
            <li>Intelligent transaction categorization and analysis</li>
            <li>AI-driven spending insights and predictions</li>
            <li>Automated budgeting recommendations</li>
            <li>Anomaly detection for unusual spending patterns</li>
            <li>Cashflow forecasting and financial planning tools</li>
          </ul>
        </div>

        <div className="section">
          <h2>2. Eligibility and User Requirements</h2>
          <p>To use Fingenie, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Be legally capable of entering binding agreements in your jurisdiction</li>
            <li>Provide accurate and truthful information</li>
            <li>Have the legal right to use any financial data you input</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. Acceptable Use Policy</h2>
          <p>You agree to use Fingenie only for lawful purposes and in accordance with these terms. You must not:</p>
          <ul>
            <li>Use the service for any illegal or unauthorized purpose</li>
            <li>Attempt to reverse engineer, decompile, or hack the application</li>
            <li>Share your account credentials with unauthorized parties</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Use the service to violate any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to other users' data</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Financial Disclaimers</h2>
          <p><span className="highlight">Important:</span> Fingenie is for informational purposes only and does not constitute:</p>
          <ul>
            <li>Professional financial, investment, or tax advice</li>
            <li>Recommendations to buy, sell, or hold financial instruments</li>
            <li>Guarantees of financial outcomes or investment returns</li>
            <li>Substitutes for professional financial planning services</li>
          </ul>
          
          <p>Always consult with qualified financial professionals before making important financial decisions.</p>
        </div>

        <div className="section">
          <h2>5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Vurlex Technologies shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Damages resulting from unauthorized access to your data</li>
            <li>Issues arising from third-party services or integrations</li>
            <li>Errors in AI predictions or financial calculations</li>
          </ul>
          
          <p>Our total liability for any claim shall not exceed the amount you paid for Fingenie Pro in the twelve months preceding the claim, or $100, whichever is greater.</p>
        </div>

        <div className="back-home">
          <a href="/">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
import './LegalPage.css';

const PrivacyPolicy = () => {
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
          <h1>Privacy Policy</h1>
          <p>Your privacy is our priority. Learn how we collect, use, and protect your financial information.</p>
        </div>

        <div className="last-updated">
          Last Updated: March 12, 2026
        </div>

        <div className="contact-info">
          <p><strong>Privacy Questions?</strong></p>
          <p>Contact our Privacy Officer: <a href="mailto:privacy@fingenie.vurlex.in">privacy@fingenie.vurlex.in</a></p>
        </div>

        <div className="section">
          <h2>1. Our Privacy Commitment</h2>
          <p>At Fingenie, we are committed to protecting your financial privacy and maintaining the highest standards of data security. <span className="highlight">We do not sell, rent, or share your personal financial data with third parties for marketing purposes.</span></p>
          
          <p>This Privacy Policy explains how Vurlex Technologies ("we," "us," or "our") collects, uses, processes, and protects your information when you use Fingenie.</p>
        </div>

        <div className="section">
          <h2>2. Information We Collect</h2>
          
          <h3>Financial Data</h3>
          <p>To provide AI-powered financial insights, we process:</p>
          <ul>
            <li>Transaction history and spending patterns</li>
            <li>Account balances and financial account information</li>
            <li>Budget and savings goal data</li>
            <li>Investment and asset information (if connected)</li>
            <li>Bill payment and recurring transaction data</li>
          </ul>
          
          <h3>Account Information</h3>
          <ul>
            <li>Email address and profile information</li>
            <li>App preferences and settings</li>
            <li>Subscription and payment information</li>
            <li>Customer support communications</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. Data Storage and Security</h2>
          
          <h3>Local Data Storage</h3>
          <p><span className="highlight">Your financial data is primarily stored locally on your device</span> using encrypted databases. This means:</p>
          <ul>
            <li>Your transaction data remains on your device by default</li>
            <li>We cannot access your raw financial information</li>
            <li>You maintain complete control over your data</li>
            <li>Data is encrypted using AES-256 encryption</li>
          </ul>
          
          <h3>Security Measures</h3>
          <ul>
            <li><strong>Encryption:</strong> AES-256 for data at rest, TLS 1.3 for data in transit</li>
            <li><strong>Authentication:</strong> Multi-factor authentication and biometric security</li>
            <li><strong>Access Controls:</strong> Role-based access and principle of least privilege</li>
            <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
            <li><strong>Compliance:</strong> SOC 2 Type II, GDPR, CCPA, and PCI DSS standards</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Your Privacy Rights</h2>
          
          <h3>Data Access and Control</h3>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> View all data we have about you</li>
            <li><strong>Portability:</strong> Export your data in standard formats (CSV, JSON)</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request complete removal of your data</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Objection:</strong> Opt out of specific processing activities</li>
          </ul>
        </div>

        <div className="section">
          <h2>5. Contact Us</h2>
          <div className="contact-info">
            <p><strong>Privacy Questions or Requests?</strong></p>
            <p>Privacy Officer: <a href="mailto:privacy@fingenie.vurlex.in">privacy@fingenie.vurlex.in</a></p>
            <p>General Support: <a href="mailto:support@fingenie.vurlex.in">support@fingenie.vurlex.in</a></p>
          </div>
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

export default PrivacyPolicy;
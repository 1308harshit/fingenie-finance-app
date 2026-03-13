import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="faq-page">
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
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about Fingenie, your AI-powered finance assistant</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Getting Started</h2>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq('what-is-fingenie')}>
              What is Fingenie and how does it work?
              <span className={`expand-icon ${openFaq === 'what-is-fingenie' ? 'rotated' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openFaq === 'what-is-fingenie' ? 'active' : ''}`}>
              <p>Fingenie is an AI-powered finance assistant that helps you navigate your finances with intelligent insights. Our app provides:</p>
              <ul>
                <li><strong>AI-powered budgeting:</strong> Smart categorization and spending analysis</li>
                <li><strong>Anomaly detection:</strong> Alerts for unusual spending patterns</li>
                <li><strong>Cashflow forecasting:</strong> Predictive insights for future financial planning</li>
                <li><strong>Intelligent insights:</strong> Personalized recommendations based on your spending habits</li>
              </ul>
              <p>Simply connect your accounts, and Fingenie's AI will automatically analyze your transactions, categorize spending, and provide actionable insights to help you make better financial decisions.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq('getting-started')}>
              How do I get started with Fingenie?
              <span className={`expand-icon ${openFaq === 'getting-started' ? 'rotated' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openFaq === 'getting-started' ? 'active' : ''}`}>
              <p>Getting started with Fingenie is simple:</p>
              <ol>
                <li><strong>Download the app</strong> from the App Store, Google Play, or access the web version</li>
                <li><strong>Create your account</strong> and set up your profile</li>
                <li><strong>Connect your financial accounts</strong> securely through our bank-level encryption</li>
                <li><strong>Let AI analyze your data</strong> - Fingenie will automatically categorize transactions and identify patterns</li>
                <li><strong>Explore insights</strong> - Review your AI-generated spending insights and forecasts</li>
                <li><strong>Set up budgets</strong> with AI recommendations based on your spending history</li>
              </ol>
              <p>The AI will start providing insights immediately, with more accurate predictions as it learns your spending patterns.</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="section-title">AI Features & Insights</h2>
          
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq('ai-analysis')}>
              How does Fingenie's AI analyze my spending?
              <span className={`expand-icon ${openFaq === 'ai-analysis' ? 'rotated' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openFaq === 'ai-analysis' ? 'active' : ''}`}>
              <p>Fingenie's AI uses advanced machine learning algorithms to:</p>
              <ul>
                <li><strong>Smart Categorization:</strong> Automatically categorizes transactions with 95%+ accuracy</li>
                <li><strong>Pattern Recognition:</strong> Identifies recurring expenses, seasonal spending, and unusual patterns</li>
                <li><strong>Predictive Analysis:</strong> Forecasts future spending based on historical data and trends</li>
                <li><strong>Anomaly Detection:</strong> Flags unusual transactions that may indicate fraud or overspending</li>
                <li><strong>Behavioral Insights:</strong> Provides personalized recommendations based on your unique spending habits</li>
              </ul>
              <p>The AI continuously learns from your financial behavior to provide increasingly accurate insights and predictions.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq('ai-insights')}>
              What kind of AI insights can I expect?
              <span className={`expand-icon ${openFaq === 'ai-insights' ? 'rotated' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openFaq === 'ai-insights' ? 'active' : ''}`}>
              <p>Fingenie provides various AI-powered insights:</p>
              <h4>Spending Insights</h4>
              <ul>
                <li>Monthly spending trends and comparisons</li>
                <li>Category-wise spending analysis</li>
                <li>Identification of spending spikes and their causes</li>
              </ul>
              <h4>Predictive Forecasts</h4>
              <ul>
                <li>Next month's expected expenses</li>
                <li>Savings potential based on current trends</li>
                <li>Budget recommendations for different categories</li>
              </ul>
              <h4>Smart Alerts</h4>
              <ul>
                <li>Unusual transaction notifications</li>
                <li>Budget overspend warnings</li>
                <li>Opportunities to save money</li>
              </ul>
            </div>
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

export default FAQ;
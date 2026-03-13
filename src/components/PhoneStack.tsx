import './PhoneStack.css';

const PhoneStack = () => {
  return (
    <div className="phone-stack">
      <div className="phone-container">
        <div className="phone-mockup">
          <img src="/images/image1.jpeg" alt="Fingenie App Screen 1" />
        </div>
        <div className="phone-mockup">
          <img src="/images/image2.jpeg" alt="Fingenie App Screen 2" />
        </div>
        <div className="phone-mockup">
          <img src="/images/image3.jpeg" alt="Fingenie App Screen 3" />
        </div>
      </div>
      <div className="ai-insight-card">
        <h4>AI Forecast</h4>
        <p>+₹15000 savings next week</p>
      </div>
    </div>
  );
};

export default PhoneStack;

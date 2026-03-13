import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import HeaderNav from './components/HeaderNav';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <HeaderNav />
              <Hero />
            </>
          } />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

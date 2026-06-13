import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Templates from "./components/Temp";
import WhoCanUse from "./components/WhoCanUse";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Auth from "./components/Auth";
import TemplatesPage from "./components/TemplatesPage";
import Editor from "./components/Editor";
import PublishedPage from "./components/PublishedPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function LandingPage() {
  return (
    <>
      <Nav />
      <Home />
      <Features />
      <HowItWorks />
      <WhoCanUse />
      <Templates />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/editor/:templateId" element={<Editor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/:userId" element={<PublishedPage />} />

        </Routes>
      </div>
    </Router>
  );
}




export default App;

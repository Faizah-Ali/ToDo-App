import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner'; // Home page
import Features from './Component/Features'; // If needed separately
import Service from './Component/Service'; // If needed separately
import Login from './Component/Login'; // If needed separately
import Footer from './Component/Footer'; // If needed separately

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Home route where all components are displayed together */}
          <Route path="/" element={<Banner />} />

          {/* Additional routes if you want individual pages for each section */}
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/services" element={<Service />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <div className="App">
      <Header onMenuClick={() => { setMobileMenuActive(!mobileMenuActive) }} />
      <MobileMenu style={{ display: mobileMenuActive ? 'flex' : 'none' }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;

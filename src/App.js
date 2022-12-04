import './App.css';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HomePage from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <div className="App">
      <Header onMenuClick={() => { setMobileMenuActive(!mobileMenuActive) }} />
      <MobileMenu style={{ display: mobileMenuActive ? 'flex' : 'none' }} />
      <HomePage />
    </div>
  );
}

export default App;

import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Button text='HELOOOOO' color="panic" />
    </div>
  );
}

export default App;

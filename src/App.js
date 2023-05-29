import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import './styles/App.css';
import axios from 'axios';

axios.defaults.baseURL = "https://tinder-backend-taupe.vercel.app";

function App() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

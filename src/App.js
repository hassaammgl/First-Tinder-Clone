import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import './styles/App.css'

function App() {
  return (
    <div>
      <Header /> {/* For header component*/}
      <TinderCards /> {/* For Tinder card component*/}
      <SwipeButtons /> {/* For Btns component*/}
    </div>
  );
}

export default App;

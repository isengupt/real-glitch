import logo from './logo.svg';
import './App.css';
import Glitch from './Glitch'
import DigitHover from './DigitHover'
import WavesWords from './WaveWords'
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Glitch/>
    <DigitHover/>
    <WavesWords/>
    </div>
  );
}

export default App;

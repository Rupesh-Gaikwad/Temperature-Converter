import './App.css';
import Calculator from './components/Calculator';
import thermometer_logo from './images/thermometer.png';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Temprature Converter</h1>
        <div><img src={thermometer_logo} alt="Thermometer Logo"/></div>
      </header>
      < Calculator/>
    </div>
  );
}

export default App;

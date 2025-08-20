// src/App.jsx

import WeatherForecast from "./components/WeatherForecast";
import WeatherData from './components/WeatherData';

const App = () => {

  return (
      <>
    <h1>Local Weather</h1>
    <section>
      {WeatherData.map((data, index) => (
        
      <WeatherForecast key={index} data={data}/>

      ))}
    </section>
  </>
  );
}

export default App

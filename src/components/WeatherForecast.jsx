import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon';

function WeatherForecast({data}) {

  const { day, img, imgAlt, conditions, time } = data;

  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt}/>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  )
}

export default WeatherForecast
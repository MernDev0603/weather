interface WeatherDisplayProps {
    weather: {
      time: string[];
      temperature_2m_max: number[];
      wind_speed_10m_max: number[];
    };
  }
  
  const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
    return (
      <div>
        {weather.time.map((date, index) => (
          <div key={date}>
            <p>{date}</p>
            <p>{weather.temperature_2m_max[index]}°C</p>
            <p>Wind: {weather.wind_speed_10m_max[index]} km/h</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeatherDisplay;
  
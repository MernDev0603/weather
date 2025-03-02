import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./api/weather";
import { fetchGeoLocation } from "./api/geolocation";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    const geolocation = await fetchGeoLocation(city);
    const data = await fetchWeather(geolocation.latitude, geolocation.latitude);
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;

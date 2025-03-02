import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./api/weather";
import { fetchGeoLocation } from "./api/geolocation";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    try {
      const geolocation = await fetchGeoLocation(city);
      const data = await fetchWeather(geolocation.latitude, geolocation.latitude);
      setWeather(data);
    } catch {
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 m-6">Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherDisplay weather={weather} />}
      {!weather && <>No data to display</>}
    </div>
  );
};

export default App;

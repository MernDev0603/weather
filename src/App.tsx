import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeather } from "./api/weather";
import { fetchGeoLocation } from "./api/geolocation";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (city: string) => {
    setLoading(true); // Start loading
    setWeather(null); // Clear previous results

    try {
      const geolocation = await fetchGeoLocation(city);
      const data = await fetchWeather(geolocation.latitude, geolocation.longitude);
      setWeather(data);
    } catch {
      setWeather(null);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 m-6">Weather Forecast</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="mt-10 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      {!loading && weather && <WeatherDisplay weather={weather} />}
      {!loading && !weather && <p className="text-gray-500 mt-6">No data to display</p>}
    </div>
  );
};

export default App;

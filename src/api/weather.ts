import axios from "axios";

interface WeatherData {
  time: string[];
  temperature_2m_max: number[];
  wind_speed_10m_max: number[];
  weather_code: number[];
}

export const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,wind_speed_10m_max,weather_code&timezone=auto`
    );
    return {
      time: response.data.daily.time.slice(1, 6),
      temperature_2m_max: response.data.daily.temperature_2m_max.slice(1, 6),
      wind_speed_10m_max: response.data.daily.wind_speed_10m_max.slice(1, 6),
      weather_code: response.data.daily.weather_code.slice(1, 6),
    };
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

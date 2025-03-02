import axios from "axios";

interface WeatherData {
  time: string[];
  temperature_2m_max: number[];
  wind_speed_10m_max: number[];
}

export const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,wind_speed_10m_max&timezone=auto`
    );
    return response.data.daily;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

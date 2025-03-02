import { fetchWeather } from "./weather";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

test("fetches weather data successfully", async () => {
  vi.mocked(axios.get).mockResolvedValue({
    data: {
      daily: {
        time: ["2025-03-02", "2025-03-03"],
        temperature_2m_max: [20, 22],
        wind_speed_10m_max: [10, 15],
        weather_code: [3, 71]
      },
    },
  });

  const data = await fetchWeather(51.5074, -0.1278);
  expect(data.time[0]).toBe("2025-03-03");
  expect(data.temperature_2m_max[0]).toBe(22);
  expect(data.wind_speed_10m_max[0]).toBe(15);
  expect(data.weather_code[0]).toBe(71);
});

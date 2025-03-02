import { render, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";

const mockWeatherData = {
  time: ["2025-03-02"],
  temperature_2m_max: [20],
  wind_speed_10m_max: [10],
};

test("renders weather data", () => {
  render(<WeatherDisplay weather={mockWeatherData} />);
  expect(screen.getByText("2025-03-02")).toBeInTheDocument();
  expect(screen.getByText("20°C")).toBeInTheDocument();
  expect(screen.getByText("Wind: 10 km/h")).toBeInTheDocument();
});

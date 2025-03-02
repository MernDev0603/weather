import { getWeatherIcon } from "../utils/weatherIcons";

interface WeatherDisplayProps {
    weather: {
        time: string[];
        temperature_2m_max: number[];
        wind_speed_10m_max: number[];
        weather_code: number[];
    };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {

    return (
        <div className="m-6 p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {weather.time.map((date, index) => (
                <div
                    key={date}
                    className="group relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                >
                    <p className="text-sm text-gray-500 font-medium">{date}</p>

                    <div className="flex items-center justify-center mt-4 text-5xl">
                        {getWeatherIcon(weather.weather_code[index]).icon}
                    </div>

                    <p className="text-lg font-semibold text-gray-800 mt-4">
                        {getWeatherIcon(weather.weather_code[index]).description}
                    </p>

                    <p className="text-xl font-bold text-blue-600 mt-2">
                        {weather.temperature_2m_max[index]}°C
                    </p>

                    <p className="text-gray-600 text-sm mt-2">
                        💨 Wind: {weather.wind_speed_10m_max[index]} km/h
                    </p>
                </div>
            ))}
        </div>
    );

};

export default WeatherDisplay;

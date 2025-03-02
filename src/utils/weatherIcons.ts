export const getWeatherIcon = (code: number): { icon: string; description: string } => {
    const weatherIcons: { [key: number]: { icon: string; description: string } } = {
      0: { icon: "☀️", description: "Clear sky" },
      1: { icon: "🌤️", description: "Mainly clear" },
      2: { icon: "⛅", description: "Partly cloudy" },
      3: { icon: "☁️", description: "Overcast" },
      45: { icon: "🌫️", description: "Fog" },
      48: { icon: "🌁", description: "Rime fog" },
      51: { icon: "🌧️", description: "Drizzle (light)" },
      53: { icon: "🌧️", description: "Drizzle (moderate)" },
      55: { icon: "🌧️", description: "Drizzle (dense)" },
      56: { icon: "🌨️", description: "Freezing drizzle (light)" },
      57: { icon: "🌨️", description: "Freezing drizzle (dense)" },
      61: { icon: "🌦️", description: "Rain (slight)" },
      63: { icon: "🌧️", description: "Rain (moderate)" },
      65: { icon: "🌧️", description: "Rain (heavy)" },
      66: { icon: "🌨️", description: "Freezing rain (light)" },
      67: { icon: "🌨️", description: "Freezing rain (heavy)" },
      71: { icon: "❄️", description: "Snowfall (slight)" },
      73: { icon: "❄️", description: "Snowfall (moderate)" },
      75: { icon: "❄️", description: "Snowfall (heavy)" },
      77: { icon: "🌨️", description: "Snow grains" },
      80: { icon: "🌦️", description: "Rain showers (slight)" },
      81: { icon: "🌧️", description: "Rain showers (moderate)" },
      82: { icon: "⛈️", description: "Rain showers (violent)" },
      85: { icon: "❄️", description: "Snow showers (slight)" },
      86: { icon: "❄️", description: "Snow showers (heavy)" },
      95: { icon: "⛈️", description: "Thunderstorm (slight or moderate)" },
      96: { icon: "⛈️", description: "Thunderstorm with hail (slight)" },
      99: { icon: "⛈️", description: "Thunderstorm with hail (heavy)" },
    };
  
    return weatherIcons[code] || { icon: "❓", description: "Unknown weather" };
  };
  
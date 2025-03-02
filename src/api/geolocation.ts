import axios from "axios";

export interface LocationData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

export const fetchGeoLocation = async (city: string): Promise<LocationData> => {
  try {
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search`, {
      params: {
        name: city,
        count: 1,
        language: "en",
        format: "json",
      },
    });

    if (!response.data.results) {
      throw new Error("No results found");
    }

    const result = response.data.results[0];

    return {
      id: result.id,
      name: result.name,
      latitude: result.latitude,
      longitude: result.longitude,
      country: result.country,
    };
  } catch (error) {
    throw new Error("Failed to fetch location data");
  }
};

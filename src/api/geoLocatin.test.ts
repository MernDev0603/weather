import { fetchGeoLocation } from "./geolocation";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

describe("fetchGeoLocation", () => {
  test("returns location data successfully", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: 1,
            name: "Berlin",
            latitude: 52.52,
            longitude: 13.405,
            country: "Germany",
          },
        ],
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockResponse);

    const result = await fetchGeoLocation("Berlin");

    expect(result).toEqual(
      {
        id: 1,
        name: "Berlin",
        latitude: 52.52,
        longitude: 13.405,
        country: "Germany",
      },
    );
  });

  test("throws an error when no results are found", async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: {} });

    await expect(fetchGeoLocation("UnknownCity")).rejects.toThrow("Failed to fetch location data");
  });

  test("throws an error when API call fails", async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error("Network Error"));

    await expect(fetchGeoLocation("Berlin")).rejects.toThrow("Failed to fetch location data");
  });
});

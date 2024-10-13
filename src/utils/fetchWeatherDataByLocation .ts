import { API_KEY } from "./../../config"; // Adjust the path as necessary
import axios from "axios";

type TGeoLocation = {
  lat: number;
  lon: number;
};

const fetchWeatherDataByLocation = async (geoLocation: TGeoLocation) => {
  const controller = new AbortController();

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${API_KEY}`,
      { signal: controller.signal },
    );

    return response.data; // Return the data directly
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error(error);
      throw error; // Rethrow the error for handling in the component
    }
  } finally {
    // Cleanup can be handled here if needed
    controller.abort();
  }
};

export default fetchWeatherDataByLocation;

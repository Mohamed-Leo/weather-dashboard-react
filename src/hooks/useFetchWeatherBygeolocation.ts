import { useWeatherStore } from "@/store";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect } from "react";

function useFetchWeatherBygeolocation(selectedCity: {
  lat: number;
  lon: number;
}) {
  const { lon, lat } = selectedCity;

  // get the setWeatherData from the store---
  const { setWeatherData } = useWeatherStore();

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherByGeolocation = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = response.data;

        console.log(data); // log data----
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
        }
      }
    };

    // call the api--
    fetchWeatherByGeolocation();

    // clean up--
    return () => {
      controller.abort();
    };
  }, [lat, lon, setWeatherData]);
}

export default useFetchWeatherBygeolocation;

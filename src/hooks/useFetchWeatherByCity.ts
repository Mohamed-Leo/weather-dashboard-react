import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect, useState } from "react";

function useFetchWeatherByCity(name: string) {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherByCity = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = await response.data;

        setWeatherData(data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
        }
      }
    };

    // call the api--
    fetchWeatherByCity();

    // clean up--
    return () => {
      controller.abort();
    };
  }, [name, setWeatherData]);

  return weatherData;
}

export default useFetchWeatherByCity;

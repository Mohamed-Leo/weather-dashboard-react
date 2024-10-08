import { useWeatherStore } from "@/store";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect } from "react";

function useFetchWeatherByCity(name: string) {
  // get the setWeatherData from the store---
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherByCity = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = response.data;

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
}

export default useFetchWeatherByCity;

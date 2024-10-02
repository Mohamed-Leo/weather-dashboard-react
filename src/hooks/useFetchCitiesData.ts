import { useWeatherStore } from "@/store";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect } from "react";

function useFetchCitiesData(citySearchValue: string) {
  // get the setCities state from the store---
  const setCities = useWeatherStore((state) => state.setCities);

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherByCity = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${citySearchValue}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = await response.data;

        // check on data ----------
        if (data.length === 0) throw new Error("No cities found");

        // update the cities state in the store---
        setCities(data);
      } catch (error) {
        // check if error is not cancelled message---
        if (!axios.isCancel(error)) {
          console.error("Error fetching cities:", error);
          setCities([]); // empty cities state in the store---
        }
      }
    };

    // check on cityValue before call the api and make sure to set the cities state back to empty array----
    if (!citySearchValue) {
      setCities([]);
      return;
    }

    // call the api---
    fetchWeatherByCity();

    // clear up-----
    return () => {
      controller.abort();
    };
  }, [citySearchValue, setCities]);
}

export default useFetchCitiesData;

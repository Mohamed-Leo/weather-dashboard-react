import { useWeatherStore } from "@/store";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect } from "react";

interface IUseFetchForecastByGeoLocationProps {
  lat: number | undefined;
  lon: number | undefined;
}

function useFetchForecastByGeoLocation({
  lat,
  lon,
}: IUseFetchForecastByGeoLocationProps) {
  // get the setForeCastFivedays from the store---
  const setForeCastFivedays = useWeatherStore(
    (state) => state.setForeCastFivedays,
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchForecastByGeoLocation = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = response.data;

        setForeCastFivedays(data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
        }
      }
    };

    // check on geolocation data before call----
    if (!lat && !lon) return;

    // call the api--
    fetchForecastByGeoLocation();

    // clear up-----
    return () => {
      controller.abort();
    };
  }, [lat, lon, setForeCastFivedays]);
}

export default useFetchForecastByGeoLocation;

import { useWeatherStore } from "@/store";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect } from "react";

interface IuseFetchAirPollutionDataProps {
  lat: number | undefined;
  lon: number | undefined;
}

function useFetchAirPollutionData({
  lat,
  lon,
}: IuseFetchAirPollutionDataProps) {
  // get the setAirPollution from the store---
  const setAirPollution = useWeatherStore((state) => state.setAirPollution);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAirPollutionByLocation = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
          { signal: controller.signal },
        );

        const data = response.data;

        setAirPollution(data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
        }
      }
    };

    // check on geolocation data before call----
    if (!lat && !lon) return;

    // call the api--
    fetchAirPollutionByLocation();

    // clear up-----
    return () => {
      controller.abort();
    };
  }, [lat, lon, setAirPollution]);
}

export default useFetchAirPollutionData;

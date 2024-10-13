import { IUseFetchForecastByGeoLocationProps } from "@/interfaces";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect, useState } from "react";

function useFetchForecastByGeoLocation({
	lat,
	lon,
}: IUseFetchForecastByGeoLocationProps) {
	const [foreCastData, setForeCastData] = useState();

	useEffect(() => {
		const controller = new AbortController();

		const fetchForecastByGeoLocation = async () => {
			try {
				const response = await axios.get(
					`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
					{ signal: controller.signal },
				);

				const data = await response.data;

				setForeCastData(data);
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
	}, [lat, lon, setForeCastData]);

	return foreCastData;
}

export default useFetchForecastByGeoLocation;

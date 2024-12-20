import { IuseFetchAirPollutionDataProps } from "@/interfaces";
import { API_KEY } from "./../../config";
import axios from "axios";
import { useEffect, useState } from "react";

function useFetchAirPollutionData({
	lat,
	lon,
}: IuseFetchAirPollutionDataProps) {
	const [airPollutionData, setAirPollutionData] = useState();

	useEffect(() => {
		const controller = new AbortController();

		const fetchAirPollutionByLocation = async () => {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
					{ signal: controller.signal },
				);

				const data = await response.data;

				setAirPollutionData(data);
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
	}, [lat, lon, setAirPollutionData]);

	return airPollutionData;
}

export default useFetchAirPollutionData;

import { Button } from "@/components/ui/button";
import { useWeatherStore } from "@/store";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

function TimerClock() {
	const [currentTime, setCurrentTime] = useState("");

	// get the timezone from the weatherData from the store--
	const weatherData = useWeatherStore((state) => state.weatherData);

	// side effect for the life time update---
	useEffect(() => {
		const updateTime = () => {
			if (weatherData?.timezone) {
				const localMoment = moment().utcOffset(weatherData.timezone / 60);
				setCurrentTime(localMoment.format("HH:mm:ss"));
			}
		};

		// Update immediately
		updateTime();

		// Then update every second--
		const interval = setInterval(updateTime, 1000);

		// Clean up ---
		return () => clearInterval(interval);
	}, [weatherData]);

	return (
		<Button className="timer-clock transition-all cursor-default bg-[#0e1421] rounded-md hover:bg-[#22304e] text-white">
			{currentTime}
		</Button>
	);
}

export default TimerClock;

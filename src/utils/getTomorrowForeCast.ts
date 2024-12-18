import { IForecastItem, IWeatherForecast } from "@/interfaces";
import moment from "moment-timezone";

function getTomorrowForeCast(
	foreCastFivedays: IWeatherForecast,
): IForecastItem | undefined {
	const tomorrow = moment()
		.add(1, "days")
		.startOf("day")
		.format()
		.split("T")[0];

	// Find the first forecast item for tomorrow---
	const tomorrowForecast = foreCastFivedays.list.find(
		(forecast: IForecastItem) => forecast.dt_txt.includes(tomorrow),
	);

	return tomorrowForecast;
}

export default getTomorrowForeCast;

import { IForecastItem, IWeatherForecast } from "@/interfaces";
import moment from "moment-timezone";

function GetToDayForeCast(foreCastFivedays: IWeatherForecast) {
	// get today date---
	const toDayDate = moment().format("YYYY-MM-DD");

	// filter the days depending on the date-----
	const toDayForeCast = foreCastFivedays.list.filter(
		(forecast: IForecastItem) => forecast.dt_txt.includes(toDayDate),
	);

	return toDayForeCast;
}

export default GetToDayForeCast;

import { IForecastItem, IWeatherForecast } from "@/interfaces";
import moment from "moment-timezone";

function getToDayForeCast(foreCastFivedays: IWeatherForecast): IForecastItem[] {
	// get today date---
	const toDayDate = moment().format("YYYY-MM-DD");

	// filter the days depending on the date-----
	const toDayForeCast = foreCastFivedays.list.filter(
		(forecast: IForecastItem) => forecast.dt_txt.includes(toDayDate),
	);

	return toDayForeCast;
}

export default getToDayForeCast;

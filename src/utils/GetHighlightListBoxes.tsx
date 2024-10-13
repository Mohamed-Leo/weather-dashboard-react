import { IWeather } from "@/store";
import {
	Cloudy,
	HighHumidity,
	LowHumidity,
	WindyCloud,
} from "@/constants/WeatherIcons";
import Compass from "@/components/Compass";

function getHighlightListBoxes(weatherData: IWeather) {
	// check on data-----
	if (!weatherData) return [];

	// common style---
	const ComonStyle =
		"flex flex-col gap-3 xl:gap-5 items-center justify-between bg-[#0e1421] rounded-2xl md:flex-col xl:flex-row py-3 px-6";

	const highlightListBoxes = [
		{
			title: `Wind (${weatherData?.wind.deg} deg)`,
			icon: (
				<Compass width={150} height={150} direction={weatherData?.wind.deg} />
			),
			style: ComonStyle + " col-span-full",
		},
		{
			title: `Clouds (${weatherData?.clouds.all})`,
			icon: <Cloudy width={60} height={60} />,
			style: ComonStyle + " col-span-2",
		},
		{
			title: `pressure (${weatherData.main.humidity})`,
			icon:
				(weatherData?.main.humidity as number) < 60 ? (
					<LowHumidity />
				) : (
					<HighHumidity />
				),
			style: ComonStyle + " col-span-2",
		},
		{
			title: `Humidity (${weatherData?.main.humidity})`,
			icon: <WindyCloud width={60} height={60} />,
			style: ComonStyle + " col-span-2",
		},
	];

	return highlightListBoxes;
}

export default getHighlightListBoxes;

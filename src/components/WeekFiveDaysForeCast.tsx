import Loading from "@/layouts/Loading";
import { useWeatherStore } from "@/store";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { IoTodayOutline } from "react-icons/io5";
import processWeeklyForecast from "@/utils/processWeeklyForecast";
import WeatherIcon from "./WeatherIcon";
import { IWeeklyData } from "@/interfaces";

function WeekFiveDaysForeCast() {
	// get the forecast data from the store---
	const foreCastData = useWeatherStore((state) => state.foreCastFivedays);

	// plugin for Carousel----
	const plugin = React.useRef(Autoplay({ delay: 2000 }));

	// check on foreCastData while loading------
	if (!foreCastData) return <Loading />;

	// destructuring data ----
	const { city, list } = foreCastData;

	// get the weeklydata----
	const weeklyData: IWeeklyData[] = processWeeklyForecast(list);

	return (
		<div className="h-full">
			<h2 className="flex items-center justify-center gap-2 text-lg font-bold mb-4">
				<IoTodayOutline /> 5-Day Forecast for {city.name}
			</h2>

			<Carousel
				plugins={[plugin.current]}
				className="w-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{weeklyData.map((todayCast: IWeeklyData) => (
						<CarouselItem
							key={todayCast.date}
							className="basis-1/2 md:basis-1/3 mx-auto"
						>
							<div className="week-box space-y-3 min-h-64 sm:min-h-fit rounded-xl py-5 px-4 bg-[#192131] hover:bg-[#29354e] transition-colors">
								<h3 className="text-md">{todayCast.date}</h3>

								{/* degree-weather-description */}
								<div className="flex items-center gap-5 w-fit mx-auto flex-col md:flex-row">
									<p className="text-3xl">{todayCast.temp}°</p>
									<WeatherIcon
										iconName={todayCast.icon}
										id={todayCast.weatherId}
										width={50}
										height={50}
									/>
									<p>{todayCast.description}</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}

export default WeekFiveDaysForeCast;

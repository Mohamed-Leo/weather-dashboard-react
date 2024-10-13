import ToDayBox from "./ToDayBox";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import GetToDayForeCast from "@/utils/GetToDayForeCast";
import { IForecastItem, IWeatherForecast } from "@/interfaces";

interface IToDayBoxProps {
	backGround: string;
	foreCastFivedays: IWeatherForecast;
}

function ToDayListBox({ foreCastFivedays, backGround = "" }: IToDayBoxProps) {
	// get today forecast by using the GetToDayForeCast utility---
	const toDayForeCast = GetToDayForeCast(foreCastFivedays);

	// plugin for Carousel----
	const plugin = React.useRef(Autoplay({ delay: 3000 }));

	return (
		<div className={`today-list-boxes w-full ${backGround} p-5 rounded-3xl`}>
			<Carousel
				plugins={[plugin.current]}
				className="w-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{toDayForeCast.map((todayCast: IForecastItem) => (
						<CarouselItem
							key={todayCast.dt_txt}
							className="basis-1/3 lg:basis-1/3 mx-auto"
						>
							<ToDayBox key={todayCast.dt_txt} todayForeCastData={todayCast} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
}

export default ToDayListBox;

import { IWeatherStatusProps } from "@/interfaces";

function WeatherStatus({
	weatherDescription,
	feelsLikeTemp,
	tempIcon,
}: IWeatherStatusProps) {
	return (
		<div className="space-y-3 sm:space-y-1">
			<p className="text-2xl sm:text-3xl lg:text-2xl">{weatherDescription}</p>
			<p className="text-[13px] flex items-center justify-center sm:justify-normal gap-1 opacity-80">
				Feels Like {feelsLikeTemp} {tempIcon}
			</p>
		</div>
	);
}

export default WeatherStatus;

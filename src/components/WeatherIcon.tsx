import weatherDataIconsByCode from "@/constants/weatherDataIconsByCode";
import { IWeatherIconByCode, IWeatherIconProps } from "@/interfaces";

function WeatherIcon({
	id,
	iconName,
	width = 100,
	height = 100,
}: IWeatherIconProps) {
	return (
		<>
			{weatherDataIconsByCode.map(
				(item: IWeatherIconByCode) =>
					item.code === id && (
						<div className="shape-stroke scale-150 w-fit mx-auto" key={id}>
							{item.icon(width, height, iconName)}
						</div>
					),
			)}
		</>
	);
}

export default WeatherIcon;

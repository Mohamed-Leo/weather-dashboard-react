import weatherDataIconsByCode from "@/constants/weatherDataIconsByCode";

interface IWeatherIconProps {
	id: number;
	iconName: string;
	width?: number;
	height?: number;
}

function WeatherIcon({
	id,
	iconName,
	width = 100,
	height = 100,
}: IWeatherIconProps) {
	return (
		<>
			{weatherDataIconsByCode.map(
				(item) =>
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

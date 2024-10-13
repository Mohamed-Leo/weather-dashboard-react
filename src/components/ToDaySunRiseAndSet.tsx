import { IToDatSunRiseAndSetProps } from "@/interfaces";
import { SunRise, SunSet } from "../constants/WeatherIcons";
import ConvertUnixToTime from "@/utils/ConvertUnixToTime";

function ToDaySunRiseAndSet({
	weatherData,
	backGround = "",
}: IToDatSunRiseAndSetProps) {
	// use useConvertUnixToTime custom hook to get the right time--
	const sunriseTime = ConvertUnixToTime(
		weatherData?.sys.sunrise as number,
		weatherData?.timezone as number,
	);

	const sunsetTime = ConvertUnixToTime(
		weatherData?.sys.sunset as number,
		weatherData?.timezone as number,
	);

	return (
		<div
			className={`today-sunrise-set-box ${backGround} justify-center md:justify-center items-center sm:justify-between p-3 rounded-lg flex-wrap flex lg:justify-between gap-3`}
		>
			{/* Sunrise */}
			<div className="space-x-3 text-center">
				<p className="text-center">Sunrise</p>
				<SunRise />
				<span>{sunriseTime} AM</span>
			</div>

			{/* Sunset */}
			<div className="space-x-3 text-center">
				<p className="text-center">Sunset</p>
				<SunSet />
				<span>{sunsetTime} PM</span>
			</div>
		</div>
	);
}

export default ToDaySunRiseAndSet;

import useTemperatureConverter from "@/hooks/useTemperatureConverter";
import WeatherIcon from "./WeatherIcon";
import { ITomorrowBoxProps } from "@/interfaces";
import getTomorrowForeCast from "@/utils/getTomorrowForeCast";

function TomorrowBox({ backGround, foreCastFivedays }: ITomorrowBoxProps) {
	// get the tommorow foreCast by using getTomorrowForeCast custom utility----
	const tommorowForeCast = getTomorrowForeCast(foreCastFivedays);

	// use the useTemperatureConverter to get the tomorrow Temperature--
	const { convertedTemps } = useTemperatureConverter({
		temp: tommorowForeCast?.main.temp as number,
	});

	return (
		<div
			className={`tomorrow-box ${backGround} p-3 rounded-lg flex items-center sm:justify-between gap-4 justify-center flex-wrap`}
		>
			{/* Tomorrow , weather status , degree box */}
			<div className="text-center sm:text-left">
				<p>Tomorrow</p>
				<p className="text-[#676b73]">
					{tommorowForeCast?.weather[0].description}
				</p>
			</div>

			<h2 className="text-4xl">{convertedTemps.temp}°</h2>

			{/* weather icon box */}
			<WeatherIcon
				id={tommorowForeCast?.weather[0].id as number}
				iconName={tommorowForeCast?.weather[0].icon as string}
				width={50}
				height={50}
			/>
		</div>
	);
}

export default TomorrowBox;

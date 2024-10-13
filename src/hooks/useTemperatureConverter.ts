// this function to convert the tempNumber-----
import { useState, useMemo } from "react";
import ConvertedTempIcon from "@/utils/ConvertedTempIcon";
import { ConvertedTemperatures, TemperatureData } from "@/interfaces";

type TemperatureUnit = "celsius" | "fahrenheit";

function useTemperatureConverter(kelvinTemp: TemperatureData) {
	const [unit, setUnit] = useState<TemperatureUnit>("celsius");

	// destructure kelvinTemp data -----
	const { temp, feels_like, temp_max, temp_min } = kelvinTemp;

	// tempIcon---
	const tempIcon = ConvertedTempIcon(unit);

	const convertedTemps = useMemo<ConvertedTemperatures>(() => {
		// create the converter ----
		const converter = unit === "celsius" ? kelvinToCelsius : kelvinToFahrenheit;

		return {
			temp: converter(temp),
			feels_like: converter(feels_like as number),
			temp_min: converter(temp_min as number),
			temp_max: converter(temp_max as number),
		};
	}, [temp, feels_like, temp_max, temp_min, unit]);

	const toggleUnit = () =>
		setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));

	return { convertedTemps, unit, toggleUnit, tempIcon };
}

const kelvinToCelsius = (kelvinTemp: number) => Math.round(kelvinTemp - 273.15);
const kelvinToFahrenheit = (kelvinTemp: number) =>
	Math.round(((kelvinTemp - 273.15) * 9) / 5 + 32);

export default useTemperatureConverter;

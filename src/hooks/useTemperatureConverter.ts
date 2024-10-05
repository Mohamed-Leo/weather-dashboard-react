// this function to convert the tempNumber-----
import { useState, useMemo } from "react";
import useConvertedTempIcon from "./useConvertedTempIcon";

type TemperatureUnit = "celsius" | "fahrenheit";

interface TemperatureData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

interface ConvertedTemperatures {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

function useTemperatureConverter(kelvinTemp: TemperatureData) {
  const [unit, setUnit] = useState<TemperatureUnit>("celsius");

  // tempIcon---
  const tempIcon = useConvertedTempIcon(unit);

  const convertedTemps = useMemo<ConvertedTemperatures>(() => {
    // create the converter ----
    const converter = unit === "celsius" ? kelvinToCelsius : kelvinToFahrenheit;

    return {
      temp: converter(kelvinTemp.temp),
      feels_like: converter(kelvinTemp.feels_like),
      temp_min: converter(kelvinTemp.temp_min),
      temp_max: converter(kelvinTemp.temp_max),
    };
  }, [kelvinTemp, unit]);

  const toggleUnit = () =>
    setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));

  return { convertedTemps, unit, toggleUnit, tempIcon };
}

const kelvinToCelsius = (kelvinTemp: number) => Math.round(kelvinTemp - 273.15);
const kelvinToFahrenheit = (kelvinTemp: number) =>
  Math.round(((kelvinTemp - 273.15) * 9) / 5 + 32);

export default useTemperatureConverter;

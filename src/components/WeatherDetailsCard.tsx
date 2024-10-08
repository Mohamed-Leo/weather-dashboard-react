import Switcher from "../layouts/Switcher";
import { useWeatherStore } from "@/store";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import DateBox from "./DateBox";
import useTemperatureConverter from "@/hooks/useTemperatureConverter";
import WeatherStatus from "./WeatherStatus";
import Loading from "@/layouts/Loading";

function WeatherDetailsCard() {
  //  get hte weather data form the store----
  const weatherData = useWeatherStore((state) => state.weatherData);

  // call the useTemperatureConverter to get the right temp data----
  const { convertedTemps, toggleUnit, unit, tempIcon } =
    useTemperatureConverter({
      temp: weatherData?.main.temp as number,
      feels_like: weatherData?.main.feels_like as number,
      temp_min: weatherData?.main.temp_min as number,
      temp_max: weatherData?.main.temp_max as number,
    });

  // return loading until geting data-----
  if (!weatherData) return <Loading />;

  return (
    <div className="weather-details-card flex flex-col gap-10 sm:gap-5 lg:gap-10 justify-between h-full p-4">
      {/* top part */}
      <div className="flex items-center gap-3 justify-between">
        <h1 className="2xl:text-7xl xl:text-4xl md:text-4xl text-3xl font-bold tracking-wider">
          {weatherData?.name}
        </h1>
        <Switcher toggleUnit={toggleUnit} unit={unit} />
      </div>

      {/* bottom part */}
      <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-16">
        {/* day-date-degree-box */}
        <div className="flex sm:flex-col justify-between flex-row gap-4">
          <DateBox />

          <Temperature
            temps={[
              convertedTemps.temp,
              convertedTemps.temp_min,
              convertedTemps.temp_max,
            ]}
            tempIcon={tempIcon}
          />
        </div>

        {/* wather-icon-status */}
        <div className="text-center space-y-4 sm:text-left">
          <WeatherIcon
            id={weatherData?.weather[0].id as number}
            iconName={weatherData?.weather[0].icon as string}
          />

          <WeatherStatus
            weatherDescription={weatherData?.weather[0].description as string}
            feelsLikeTemp={convertedTemps.feels_like}
            tempIcon={tempIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherDetailsCard;

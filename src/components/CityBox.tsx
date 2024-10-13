import useFetchWeatherByCity from "@/hooks/useFetchWeatherByCity";
import Loading from "@/layouts/Loading";
import { IWeather } from "@/store";
import WeatherIcon from "./WeatherIcon";

interface IOtherCityBoxProps {
  backGround?: string;
  cityName: string;
  style: string;
}

function CityBox({ backGround = "", cityName, style }: IOtherCityBoxProps) {
  // call the useFetchWeatherByCity-----
  const weatherData = useFetchWeatherByCity(cityName);

  // check before showing data---
  if (!weatherData) return <Loading height="h-fit" />;

  // destructure data----
  const { name, main, weather } = weatherData as IWeather;

  return (
    <div className={`city-box ${backGround} ${style}`}>
      {/* city , degree */}
      <div className="space-y-6">
        <h2 className="text-3xl">{Math.round(main.temp - 273.15)}°</h2>
        <p>{name}</p>
      </div>

      {/* weather status icon */}
      <div className="scale-125 flex items-center justify-center">
        <WeatherIcon
          iconName={weather[0].icon}
          id={weather[0].id}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default CityBox;

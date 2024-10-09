import { IWeather } from "@/store";
import {
  Cloudy,
  HighHumidity,
  LowHumidity,
  Wind,
  WindyCloud,
} from "@/layouts/WeatherIcons";

function useGetHighlightListBoxes(weatherData: IWeather) {
  // check on data-----
  if (!weatherData) return [];

  const highlightListBoxes = [
    {
      title: `Clouds (${weatherData?.clouds.all})`,
      icon: <Cloudy width={60} height={60} />,
    },
    {
      title: `pressure (${weatherData.main.humidity})`,
      icon:
        (weatherData?.main.humidity as number) < 60 ? (
          <LowHumidity />
        ) : (
          <HighHumidity />
        ),
    },
    {
      title: `Wind (speed ${weatherData?.wind.speed}), (deg ${weatherData?.wind.deg})`,
      icon: <Wind width={60} height={60} />,
    },
    {
      title: `Humidity (${weatherData?.main.humidity})`,
      icon: <WindyCloud width={60} height={60} />,
    },
  ];

  return highlightListBoxes;
}

export default useGetHighlightListBoxes;

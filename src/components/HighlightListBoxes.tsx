import HighlightBox from "./HighlightBox";
import ProgressBar from "@/layouts/ProgressBar";
import useFetchAirPollutionData from "@/hooks/useFetchAirPollutionData";
import { useWeatherStore } from "@/store";
import { Cloudy, UvIndex, Wind, WindyCloud } from "@/layouts/WeatherIcons";
import Loading from "@/layouts/Loading";

function HighlightListBoxes() {
  /*
   * get the weatherdata from the store to get the location to fetch the airPollution data--
   * get the airPollution data----
   */
  const { weatherData, airPollution } = useWeatherStore();

  // get the geoLocation form weatherData---
  const geoLocation = {
    lat: weatherData?.coord.lat,
    lon: weatherData?.coord.lat,
  };

  // call the useFetchAirPollutionData and send the location from weatherData to get the airPollution data---
  useFetchAirPollutionData(geoLocation);

  // get the porgress value---
  const progress = (airPollution?.list[0].main.aqi as number) * 10;

  const highlightListBoxes = [
    {
      title: `Clouds (${weatherData?.clouds.all})`,
      icon: <Cloudy width={60} height={60} />,
    },
    { title: `UV Index`, icon: <UvIndex width={60} height={60} /> },
    {
      title: `Wind (speed ${weatherData?.wind.speed}), (deg ${weatherData?.wind.deg})`,
      icon: <Wind width={60} height={60} />,
    },
    {
      title: `Humidity (${weatherData?.main.humidity})`,
      icon: <WindyCloud width={60} height={60} />,
    },
  ];

  // return loading until geting data-----
  if (!weatherData || !airPollution) return <Loading />;

  return (
    <>
      <ProgressBar progress={progress}>
        <h2>air quality ({airPollution?.list[0].main.aqi})</h2>
      </ProgressBar>

      {/* loop on highlightListBoxes from the constants folder */}
      {highlightListBoxes.map((box, i) => (
        <HighlightBox
          key={i}
          title={box.title}
          backGround="bg-[#0e1421]"
          element={box.icon}
        />
      ))}
    </>
  );
}

export default HighlightListBoxes;

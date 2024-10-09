import HighlightBox from "./HighlightBox";
import ProgressBar from "@/layouts/ProgressBar";
import useFetchAirPollutionData from "@/hooks/useFetchAirPollutionData";
import { IWeather, useWeatherStore } from "@/store";
import Loading from "@/layouts/Loading";
import { useEffect } from "react";
import GetHighlightListBoxes from "@/utils/GetHighlightListBoxes";

function HighlightListBoxes() {
  /*
   * get the weatherdata from the store to get the location to fetch the airPollution data--
   * get the airPollution data and setAirPollution----
   */
  const { weatherData, airPollution, setAirPollution } = useWeatherStore();

  // get the geoLocation form weatherData---
  const geoLocation = {
    lat: weatherData?.coord.lat,
    lon: weatherData?.coord.lat,
  };

  // call the useFetchAirPollutionData and send the location from weatherData to get the airPollution data---
  const airPollutionData = useFetchAirPollutionData(geoLocation);

  // update the airPollutionData in the store--
  useEffect(() => {
    if (airPollutionData) setAirPollution(airPollutionData);
  }, [airPollutionData, setAirPollution]);

  // get the porgress value---
  const progress = (airPollution?.list[0].main.aqi as number) * 10;

  // return loading until geting data-----
  if (!weatherData || !airPollution) return <Loading />;

  // get the highlightListBoxes data from utiliy------
  const highlightListBoxes = GetHighlightListBoxes(weatherData as IWeather);

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

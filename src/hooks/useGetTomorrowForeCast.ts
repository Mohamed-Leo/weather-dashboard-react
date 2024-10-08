import { IWeatherForecast } from "@/store";
import moment from "moment-timezone";

function useGetTomorrowForeCast(foreCastFivedays: IWeatherForecast) {
  const tomorrow = moment()
    .add(1, "days")
    .startOf("day")
    .format()
    .split("T")[0];

  // Find the first forecast item for tomorrow---
  const tomorrowForecast = foreCastFivedays.list.find((forecast) =>
    forecast.dt_txt.includes(tomorrow),
  );

  return tomorrowForecast;
}

export default useGetTomorrowForeCast;

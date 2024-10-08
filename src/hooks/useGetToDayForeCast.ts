import { IWeatherForecast } from "@/store";

function useGetToDayForeCast(foreCastFivedays: IWeatherForecast) {
  // get today date---
  const toDayDate = new Date().toISOString().split("T")[0];

  // filter the days depending on the date-----
  const toDayForeCast = foreCastFivedays.list.filter((forecast) =>
    forecast.dt_txt.includes(toDayDate),
  );

  return toDayForeCast;
}

export default useGetToDayForeCast;

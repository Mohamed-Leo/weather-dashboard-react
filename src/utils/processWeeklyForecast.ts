import { IForecastItem } from "@/store";
import moment from "moment-timezone";

export type TWeklyData = {
  date: string;
  temp: number;
  description: string;
  icon: string;
  weatherId: number;
};

const processWeeklyForecast = (foreCastList: IForecastItem[]) => {
  const weeklyData: TWeklyData[] = [];

  // get today----
  const today = moment().startOf("day");

  // make sure to start index from 1 to get the five days from tomorrow-----
  for (let i = 1; i < foreCastList.length; i += 8) {
    const dayData = foreCastList[i];
    const date = moment.unix(dayData.dt); // to get the day-----

    // check the day to avoid repeating------
    if (date.isSameOrAfter(today)) {
      weeklyData.push({
        date: date.format("ddd"),
        temp: Math.round(dayData.main.temp - 273.15), // Convert Kelvin to Celsius
        description: dayData.weather[0].description,
        icon: dayData.weather[0].icon,
        weatherId: dayData.weather[0].id,
      });

      if (weeklyData.length === 5) break; // We only need 5 days
    }
  }

  return weeklyData;
};

export default processWeeklyForecast;

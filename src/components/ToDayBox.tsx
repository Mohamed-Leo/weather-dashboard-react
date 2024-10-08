import { IForecastItem } from "@/store";
import WeatherIcon from "./WeatherIcon";
import moment from "moment-timezone";
import useTemperatureConverter from "@/hooks/useTemperatureConverter";

type TToDayBoxProps = {
  todayForeCastData: IForecastItem;
};
function ToDayBox({ todayForeCastData }: TToDayBoxProps) {
  // destrucure data----
  const { weather, dt_txt, main } = todayForeCastData;

  // use the useTemperatureConverter to get the right temp---
  const { convertedTemps, tempIcon } = useTemperatureConverter({
    temp: main.temp,
  });

  return (
    <div className="box text-center space-y-2 shadow-custom hover:bg-[#29354e] transition-colors duration-300 bg-[#1f283b] text-white p-2 rounded-xl border border-[#8d929c]">
      <p className="text-sm font-medium uppercase">
        {moment(dt_txt).format("HH:mm")}
      </p>

      <WeatherIcon
        id={weather[0].id}
        iconName={weather[0].icon}
        width={20}
        height={20}
      />

      <p className="text-sm font-medium flex justify-center gap-1">
        {convertedTemps.temp} {tempIcon}
      </p>
    </div>
  );
}

export default ToDayBox;

import weatherDataIconsByCode from "@/constants/weatherDataIconsByCode";

interface IWeatherIconProps {
  id: number | undefined;
  iconName: string | undefined;
}

function WeatherIcon({ id, iconName }: IWeatherIconProps) {
  return (
    <>
      {weatherDataIconsByCode.map(
        (item) =>
          item.code === id && (
            <div key={id}>{item.icon(100, 100, iconName)}</div>
          ),
      )}
    </>
  );
}

export default WeatherIcon;

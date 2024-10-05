import weatherDataIconsByCode from "@/constants/weatherDataIconsByCode";

interface IWeatherIconProps {
  id: number;
  iconName: string;
}

function WeatherIcon({ id, iconName }: IWeatherIconProps) {
  return (
    <>
      {weatherDataIconsByCode.map(
        (item) =>
          item.code === id && (
            <div className="scale-150 w-fit mx-auto" key={id}>
              {item.icon(100, 100, iconName)}
            </div>
          ),
      )}
    </>
  );
}

export default WeatherIcon;

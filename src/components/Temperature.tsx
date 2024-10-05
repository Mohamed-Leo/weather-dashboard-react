interface ITemperatureProps {
  temps: number[];
  tempIcon: JSX.Element;
}

function Temperature({ temps, tempIcon }: ITemperatureProps) {
  return (
    <div className="sm:space-y-3">
      <h3 className="flex items-center gap-3 text-2xl sm:text-5xl lg:text-4xl">
        {temps[0]} {tempIcon}
      </h3>
      <p className="opacity-80 text-[13px] flex gap-2">
        <span>High: {temps[1]}°</span>
        <span>Low: {temps[2]}°</span>
      </p>
    </div>
  );
}

export default Temperature;

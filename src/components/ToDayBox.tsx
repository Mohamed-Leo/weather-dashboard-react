interface IToDayBoxProps {
  todayData: {
    time: string;
    weatherStatus: JSX.Element;
    temp: string;
  };
}

function ToDayBox({ todayData }: IToDayBoxProps) {
  return (
    <div className="box text-center shadow-custom hover:bg-[#29354e] transition-colors duration-300 bg-[#1f283b] text-white p-2 rounded-xl border border-[#8d929c]">
      <p className="text-sm font-medium uppercase">{todayData.time}</p>
      <div>{todayData.weatherStatus}</div>
      <p className="text-sm font-medium">{todayData.temp}</p>
    </div>
  );
}

export default ToDayBox;

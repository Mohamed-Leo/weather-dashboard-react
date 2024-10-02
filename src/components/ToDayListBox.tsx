import ToDayBox from "./ToDayBox";
import { PartlyCloudy } from "./WeatherIcons";

interface IToDayBoxProps {
  backGround: string;
}

// today times array----
const toDayTimes = [
  { time: "1 pm", weatherStatus: <PartlyCloudy />, temp: `20°` },
  { time: "2 pm", weatherStatus: <PartlyCloudy />, temp: `21°` },
  { time: "3 pm", weatherStatus: <PartlyCloudy />, temp: `19°` },
  { time: "4 pm", weatherStatus: <PartlyCloudy />, temp: `30°` },
  { time: "5 pm", weatherStatus: <PartlyCloudy />, temp: `25°` },
  { time: "6 pm", weatherStatus: <PartlyCloudy />, temp: `28°` },
  { time: "7 pm", weatherStatus: <PartlyCloudy />, temp: `24°` },
];

function ToDayListBox({ backGround = "" }: IToDayBoxProps) {
  return (
    <div
      className={`today-list-boxes flex gap-3 lg:gap-1 flex-wrap justify-center ${backGround} p-5 rounded-3xl`}
    >
      {toDayTimes.map((today, index) => (
        <ToDayBox key={index} todayData={today} />
      ))}
    </div>
  );
}

export default ToDayListBox;

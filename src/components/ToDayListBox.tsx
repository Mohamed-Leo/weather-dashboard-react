import { PartlyCloudy } from "./WeatherIcons";

interface IToDayBoxProps {
    backGround : string;
}

// today times array----
const toDayTimes = [
    { time: '1 pm', weatherStatus: <PartlyCloudy />, temp: `20°` },
    { time: '2 pm', weatherStatus: <PartlyCloudy />, temp: `21°` },
    { time: '3 pm', weatherStatus: <PartlyCloudy />, temp: `19°` },
    { time: '4 pm', weatherStatus: <PartlyCloudy />, temp: `30°` },
    { time: '5 pm', weatherStatus: <PartlyCloudy />, temp: `25°` },
    { time: '6 pm', weatherStatus: <PartlyCloudy />, temp: `28°` },
    { time: '7 pm', weatherStatus: <PartlyCloudy />, temp: `24°` },
];


function ToDayListBox({backGround = ''} : IToDayBoxProps) {
    return (
        <div className={`flex gap-2 justify-between ${backGround} p-5 rounded-3xl`}>
            {
                toDayTimes.map((today, index) => (
                    <div key={index} className="text-center shadow-custom hover:bg-[#29354e] transition-colors duration-300 bg-[#1f283b] text-white p-2 rounded-xl border border-[#8d929c]">
                        <p className="text-sm font-medium uppercase">{today.time}</p>
                        <div>{today.weatherStatus}</div>
                        <p className="text-sm font-medium">20°</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDayListBox;
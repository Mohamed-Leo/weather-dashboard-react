import { ThunderStormDay } from "../layouts/WeatherIcons";

interface ITomorrowBoxProps {
  backGround: string;
}

function TomorrowBox({ backGround }: ITomorrowBoxProps) {
  return (
    <div
      className={`tomorrow-box ${backGround} p-3 rounded-lg flex items-center sm:justify-between gap-4 justify-center flex-wrap`}
    >
      {/* Tomorrow , weather status , degree box */}
      <div className="flex items-center h-full justify-center sm:justify-normal sm:flex-row gap-3 flex-wrap">
        <div className="text-center sm:text-left">
          <p>Tomorrow</p>
          <p className="text-[#676b73]">Thunder storm</p>
        </div>

        <h2 className="text-4xl">14°</h2>

        {/* weather icon box */}
        <ThunderStormDay />
      </div>
    </div>
  );
}

export default TomorrowBox;

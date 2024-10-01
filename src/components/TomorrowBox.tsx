import { ThunderStormDay } from './WeatherIcons';

interface ITomorrowBoxProps {
  backGround: string;
}

function TomorrowBox({ backGround }: ITomorrowBoxProps) {
  return (
    <div className={`tomorrow-box ${backGround} p-3 rounded-lg`}>
      <div className="flex items-center sm:justify-between gap-4 justify-center flex-wrap">
        {/* Tomorrow , weather status , degree box */}
        <div className="flex items-center justify-center sm:justify-normal gap-3 flex-wrap">
          <div className="text-center sm:text-left">
            <p>Tomorrow</p>
            <p className="text-[#676b73]">Thunder storm</p>
          </div>

          <h2 className="text-4xl">14°</h2>
        </div>

        {/* weather icon box */}
        <div>
          <ThunderStormDay />
        </div>
      </div>
    </div>
  );
}

export default TomorrowBox;

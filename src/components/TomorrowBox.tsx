import { ThunderStormDay } from "./WeatherIcons";

interface ITomorrowBoxProps {
    backGround: string;
}

function TomorrowBox({ backGround }: ITomorrowBoxProps) {
    return (
        <div className={`${backGround} p-3 rounded-lg`}>
            <div className="flex items-center justify-between gap-4">
                {/* Tomorrow , weather status , degree box */}
                <div className="flex items-center gap-3">
                    <div>
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
    )
}

export default TomorrowBox;
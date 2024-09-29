import { ClearDay } from "./WeatherIcons";

interface IToDatSunRiseAndSetProps {
    backGround?: string;
}

function ToDaySunRiseAndSet({ backGround = ''}: IToDatSunRiseAndSetProps) {
    return (
        <div className={`${backGround} p-3 rounded-lg flex justify-between items-center gap-3`}>
            {/* Sunrise */}
            <div className="space-x-3">
                <p className="text-center">Sunrise</p>
                <span>6:45</span>
                <span className="text-[#676b73]">AM</span>
            </div>

            {/* sun icon */}
            <div>
                <ClearDay />
            </div>

            {/* Sunset */}
            <div className="space-x-3">
                <p className="text-center">Sunset</p>
                <span>5:30</span>
                <span className="text-[#676b73]">PM</span>
            </div>
        </div>
    )
}

export default ToDaySunRiseAndSet;
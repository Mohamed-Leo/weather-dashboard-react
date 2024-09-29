import { RiCelsiusLine } from "react-icons/ri"
import Switcher from "./Switcher"
import { RainyIcon } from "./WeatherIcons";


function WeatherDetailsCard() {
    return (
        <div className="flex flex-col gap-10 sm:gap-5 lg:gap-10 justify-between h-full p-4">
            {/* top part */}
            <div className="flex items-center gap-3 justify-between">
                <h1 className="2xl:text-7xl xl:text-4xl md:text-4xl text-6xl font-bold tracking-wider">Cairo</h1>
                <Switcher />
            </div>

            {/* bottom part */}
            <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-16">

                {/* day-date-degree-box */}
                <div className="flex sm:flex-col justify-between flex-row gap-4">

                    {/* day-date */}
                    <div className="space-y-1 opacity-80">
                        <h2 className="text-xl capitalize">sunday</h2>
                        <p className="text-[13px]">29 Sep, 2024</p>
                    </div>

                    {/* degree */}
                    <div className="space-y-2">
                        <span className="flex items-center gap-3 sm:text-5xl lg:text-4xl">26 <RiCelsiusLine /></span>
                        <span className="opacity-80 text-[13px]">High: 27 Low: 10</span>
                    </div>
                </div>

                {/* wather-icon-status */}
                <div className="text-center space-y-4 sm:text-left">
                    {/* weather-icon */}
                    <div className="relative scale-150">
                        <RainyIcon width={100} height={100} />
                    </div>

                    {/* wather-status */}
                    <div className="space-y-1">
                        <p className="sm:text-3xl lg:text-2xl">Light Rain</p>
                        <p className="text-[13px] opacity-80">Feels Like 26</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetailsCard;
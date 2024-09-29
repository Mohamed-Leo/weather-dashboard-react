import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";


function ThemeSwitch() {
    const [isDark, setIsDark] = useState<boolean>(true);

    const handleTheme = () => setIsDark(prevTheme => !prevTheme);

    return (
        <div className={`${isDark ? 'bg-[#043449]' : 'bg-[#fbedb6]'} transition-all duration-500 rounded-full w-12 cursor-pointer`}
            onClick={handleTheme}>

            {/* toggle ball */}
            <div className={`${isDark ? 'bg-[#25b6f4] translate-x-8' : 'bg-[#f4ca25] translate-x-0'} transition-all ease-in-out duration-500 rounded-full size-5 p-1 flex items-center justify-center`}>
                {isDark ? <IoMoon fontSize={10} className="text-white" /> : <IoSunny fontSize={10} className="text-white" />}
            </div>
        </div>
    )
}

export default ThemeSwitch;
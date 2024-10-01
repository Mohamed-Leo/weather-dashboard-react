import { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { ThemeContext } from "../App";


function ThemeSwitch() {

    // use the themecontext---
    const themecontextvalues = useContext(ThemeContext);

    // get data like destrucure and check to avoid errors -----
    const theme = themecontextvalues?.theme;
    const toggleTheme = themecontextvalues?.toggleTheme;

    return (
        <div className={`${theme === 'dark' ? 'bg-[#043449]' : 'bg-[#fbedb6]'} transition-all duration-500 rounded-full w-12 cursor-pointer`}
            onClick={toggleTheme}>

            {/* toggle ball */}
            <div className={`${theme === 'dark' ? 'bg-[#25b6f4] translate-x-8' : 'bg-[#f4ca25] translate-x-0'} transition-all ease-in-out duration-500 rounded-full size-5 p-1 flex items-center justify-center`}>
                {theme === 'dark' ? <IoMoon fontSize={10} className="text-white" /> : <IoSunny fontSize={10} className="text-white" />}
            </div>
        </div>
    )
}

export default ThemeSwitch;
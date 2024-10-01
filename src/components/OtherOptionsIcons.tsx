// import { FaCalendar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5"


// icons style---
const iconsStyle = "location-icon text-[#676b73] cursor-pointer transition-all active:translate-y-[5px] hover:opacity-100 opacity-70";


function OtherOptionsIcons() {
    return (
        <div className="flex items-center gap-5 sm:gap-10">
            <IoLocation fontSize={25} className={iconsStyle} />
            {/* <FaCalendar fontSize={20} className={iconsStyle} /> */}
        </div>
    );
}

export default OtherOptionsIcons;
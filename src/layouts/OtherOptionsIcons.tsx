import { Button } from "@/components/ui/button";
import { IoLocation } from "react-icons/io5";

// options---
const options = [{ title: "location", icon: <IoLocation fontSize={20} /> }];

function OtherOptionsIcons() {
  // handleClick---
  const handleClick = (title: string) => {
    // check on title to tregger the right function like (fetching location)--
    if (title === "location") console.log("fetch by location", title);
  };

  return (
    <div className="other-options-box flex items-center gap-5 sm:gap-3 flex-wrap justify-center">
      {options.map((option) => (
        <Button
          key={option.title}
          className="location-icon text-[#676b73] cursor-pointer transition-all active:translate-y-[5px] bg-[#0e1421] rounded-md hover:bg-[#22304e] hover:text-white"
          onClick={() => handleClick(option.title)}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
}

export default OtherOptionsIcons;

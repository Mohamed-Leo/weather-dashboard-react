import { useState } from "react";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

function Switcher() {
  const [switchDegree, setSwitchDegree] = useState<boolean>(true);
  const handelSwitch = () => setSwitchDegree((prevDegree) => !prevDegree);

  return (
    <div
      className={`switcher relative  flex gap-6 justify-between bg-white rounded-full p-2 cursor-pointer after:absolute after:bg-[#060c1a] ${switchDegree ? "after:translate-x-0" : "after:translate-x-[-95%]"} after:right-[-3px] after:z-0 after:size-10 after:rounded-full after:top-[-4px] after:transition-all after:ease-in-out after:duration-500`}
      onClick={handelSwitch}
    >
      {/* degrees */}
      <RiFahrenheitLine
        className={`${switchDegree ? "text-black" : "text-white"} z-10 transition-colors duration-500 ease-in-out`}
      />
      <RiCelsiusLine
        className={`${switchDegree ? "text-white" : "text-black"} z-10 transition-colors duration-500 ease-in-out`}
      />
    </div>
  );
}

export default Switcher;

import { ISwitcherProps } from "@/interfaces";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

function Switcher({
	toggleUnit,
	unit = "celsius",
}: ISwitcherProps): JSX.Element {
	// handle style animation move for the Switcher---
	const changeMove = unit === "celsius";

	return (
		<div
			className={`switcher relative  flex gap-6 justify-between bg-white rounded-full p-2 cursor-pointer after:absolute after:bg-[#060c1a] ${changeMove ? "after:translate-x-0" : "after:translate-x-[-95%]"} after:right-[-3px] after:z-0 after:size-10 after:rounded-full after:top-[-4px] after:transition-all after:ease-in-out after:duration-500`}
			onClick={toggleUnit}
		>
			{/* degrees */}
			<RiFahrenheitLine
				className={`${changeMove ? "text-black" : "text-white"} z-10 transition-colors duration-500 ease-in-out`}
			/>
			<RiCelsiusLine
				className={`${changeMove ? "text-white" : "text-black"} z-10 transition-colors duration-500 ease-in-out`}
			/>
		</div>
	);
}

export default Switcher;

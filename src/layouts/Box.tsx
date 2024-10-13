import { useContext } from "react";
import { ThemeContext } from "../App";
import { IBoxProps } from "@/interfaces";

function Box({
	children,
	backGround = "",
	Boxstyle,
	title,
	icon,
}: IBoxProps): JSX.Element {
	// use the themecontext---
	const themecontextvalues = useContext(ThemeContext);

	// destrucure theme and check to avoid errors -----
	const theme = themecontextvalues?.theme;

	// boxBackgorund style---
	const boxBackgorund = backGround ? "bg-white" : "";

	return (
		<div
			className={`${Boxstyle} ${theme === "dark" ? backGround : boxBackgorund}`}
		>
			{title && (
				<h3 className="flex items-center gap-2 justify-center text-lg font-bold">
					{icon}
					{title}
				</h3>
			)}

			{children}
		</div>
	);
}

export default Box;

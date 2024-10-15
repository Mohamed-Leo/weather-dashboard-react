import { RiCelsiusLine, RiFahrenheitFill } from "react-icons/ri";

function convertedTempIcon(unit: string): JSX.Element {
	return unit === "celsius" ? <RiCelsiusLine /> : <RiFahrenheitFill />;
}

export default convertedTempIcon;

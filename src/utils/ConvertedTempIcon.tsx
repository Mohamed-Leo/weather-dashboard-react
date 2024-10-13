import { RiCelsiusLine, RiFahrenheitFill } from "react-icons/ri";

function ConvertedTempIcon(unit: string): JSX.Element {
	return unit === "celsius" ? <RiCelsiusLine /> : <RiFahrenheitFill />;
}

export default ConvertedTempIcon;

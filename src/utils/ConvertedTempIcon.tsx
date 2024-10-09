import { RiCelsiusLine, RiFahrenheitFill } from "react-icons/ri";

function ConvertedTempIcon(unit: string) {
  return unit === "celsius" ? <RiCelsiusLine /> : <RiFahrenheitFill />;
}

export default ConvertedTempIcon;

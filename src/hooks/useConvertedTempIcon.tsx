import { RiCelsiusLine, RiFahrenheitFill } from "react-icons/ri";

function useConvertedTempIcon(unit: string) {
  return unit === "celsius" ? <RiCelsiusLine /> : <RiFahrenheitFill />;
}

export default useConvertedTempIcon;

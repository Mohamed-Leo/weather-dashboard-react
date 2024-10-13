import { cities } from "@/constants/globalVariables";
import CityBox from "./CityBox";

function OtherCitiesListBoxes() {
  return (
    <div className="grid grid-cols-6 gap-5">
      {cities.map((city, i) => (
        <CityBox
          key={i}
          backGround={"bg-[#0e1421]"}
          cityName={city.name}
          style={city.style}
        />
      ))}
    </div>
  );
}

export default OtherCitiesListBoxes;

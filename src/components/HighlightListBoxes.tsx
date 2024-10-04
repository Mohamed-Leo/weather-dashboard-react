import HighlightBox from "./HighlightBox";
import { UvIndex, Wind, WindyCloud } from "../layouts/WeatherIcons";

const highlightListBoxes = [
  { title: "Chance of Rain", icon: <UvIndex width={60} height={60} /> },
  { title: "UV Index", icon: <UvIndex width={60} height={60} /> },
  { title: "Wind Status", icon: <Wind width={60} height={60} /> },
  { title: "Humidity", icon: <WindyCloud width={60} height={60} /> },
];

function HighlightListBoxes() {
  return (
    <>
      {highlightListBoxes.map((box, i) => (
        <HighlightBox
          key={i}
          title={box.title}
          backGround="bg-[#0e1421]"
          element={box.icon}
        />
      ))}
    </>
  );
}

export default HighlightListBoxes;

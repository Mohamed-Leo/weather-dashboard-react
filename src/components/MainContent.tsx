import Box from "../layouts/Box";
import ToDayWeatherBox from "./ToDayWeatherBox";
import WeatherDetailsCard from "./WeatherDetailsCard";
import HighlightListBoxes from "./HighlightListBoxes";
import OtherCitiesListBoxes from "./OtherCitiesListBoxes";
import moment from "moment-timezone";
import MapBox from "./MapBox";
import WeekFiveDaysForeCast from "./WeekFiveDaysForeCast";
import { IoToday } from "react-icons/io5";
import { DiProlog } from "react-icons/di";
import { FaCity } from "react-icons/fa";

function MainContent() {
  return (
    <main className="container px-5 sm:px-0 mt-10 sm:mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
      {/* weatherBox */}
      <Box backGround="bg-[#0e1421]" hasPadding={true} colSpan="col-span-2">
        <WeatherDetailsCard />
      </Box>

      {/* mapbox */}
      <Box colSpan="col-span-2">
        <MapBox />
      </Box>

      {/* today/week weatherBox */}
      <Box
        colSpan="col-span-2"
        backGround="bg-[#0e1421]"
        isFlex={true}
        hasPadding={true}
        title={`Today , ${moment().format("YYYY-MM-DD")}`}
        icon={<IoToday />}
      >
        <ToDayWeatherBox />
      </Box>

      {/* Today Highlight weatherBox */}
      <Box
        title="Today Highlight"
        backGround="bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"
        colSpan="col-span-2"
        isGrid={true}
        hasPadding={true}
        icon={<DiProlog />}
      >
        <HighlightListBoxes />
      </Box>

      {/* week (5 days) forecast */}
      <Box
        backGround="bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"
        colSpan="col-span-2 lg:col-span-4"
        hasPadding={true}
      >
        <WeekFiveDaysForeCast />
      </Box>

      {/* Other Cities weatherBox */}
      <Box
        title="Other Cities"
        isGrid={true}
        hasPadding={false}
        colSpan="col-span-2"
        icon={<FaCity />}
      >
        <OtherCitiesListBoxes />
      </Box>
    </main>
  );
}

export default MainContent;

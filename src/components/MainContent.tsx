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
import WeatherChart from "./charts/WeatherChart";

function MainContent() {
  return (
    <main className="container px-5 sm:px-0 mt-10 sm:mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">
      {/* weatherBox */}
      <Box
        backGround="bg-[#0e1421]"
        Boxstyle={"box p-4 col-span-2 rounded-2xl overflow-hidden space-y-4"}
      >
        <WeatherDetailsCard />
      </Box>

      {/* mapbox */}
      <Box Boxstyle={"box col-span-2 rounded-2xl overflow-hidden space-y-4"}>
        <MapBox />
      </Box>

      {/* today/week weatherBox */}
      <Box
        backGround="bg-[#0e1421]"
        Boxstyle={"box col-span-2 p-4 rounded-2xl overflow-hidden space-y-4"}
        title={`Today , ${moment().format("YYYY-MM-DD")}`}
        icon={<IoToday />}
      >
        <ToDayWeatherBox />
      </Box>

      {/* Today Highlight weatherBox */}
      <Box
        backGround="bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"
        title="Today Highlight"
        Boxstyle={"box col-span-2  p-4 rounded-2xl overflow-hidden space-y-4"}
        icon={<DiProlog />}
      >
        <HighlightListBoxes />
      </Box>

      {/* week (5 days) forecast */}
      <Box
        backGround="bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"
        Boxstyle={
          "box p-4 col-span-2 lg:col-span-4 rounded-2xl overflow-hidden space-y-4"
        }
      >
        <WeekFiveDaysForeCast />
      </Box>

      {/* chart */}
      <Box Boxstyle={"col-span-2"}>
        <WeatherChart />
      </Box>

      {/* Other Cities weatherBox */}
      <Box
        title="Other Cities"
        Boxstyle={"box col-span-2 p-4 rounded-2xl overflow-hidden space-y-4"}
        icon={<FaCity />}
      >
        <OtherCitiesListBoxes />
      </Box>
    </main>
  );
}

export default MainContent;

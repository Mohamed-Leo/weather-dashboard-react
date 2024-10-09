import Box from "../layouts/Box";
import ToDayWeatherBox from "./ToDayWeatherBox";
import WeatherDetailsCard from "./WeatherDetailsCard";
import HighlightListBoxes from "./HighlightListBoxes";
import OtherCitiesListBoxes from "./OtherCitiesListBoxes";
import moment from "moment-timezone";
import MapBox from "./MapBox";

function MainContent() {
  return (
    <main className="container select-none px-5 sm:px-0 mt-10 sm:mt-5 grid gap-y-10 md:grid-cols-2 sm:grid-cols-1 lg:gap-x-20 md:gap-x-16 md:gap-y-8 lg:md:gap-y-8 sm:gap-y-10 text-white">
      {/* weatherBox */}
      <Box backGround="bg-[#0e1421]" hasPadding={true}>
        <WeatherDetailsCard />
      </Box>

      {/* mapbox */}
      <Box>
        <MapBox />
      </Box>

      {/* today/week weatherBox */}
      <Box
        backGround="bg-[#0e1421]"
        isFlex={true}
        hasPadding={true}
        title={`Today , ${moment().format("YYYY-MM-DD")}`}
      >
        <ToDayWeatherBox />
      </Box>

      {/* Today Highlight weatherBox */}
      <Box
        title="Today Highlight"
        backGround="bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"
        isGrid={true}
        hasPadding={true}
      >
        <HighlightListBoxes />
      </Box>

      {/* Other Cities weatherBox */}
      <Box title="Other Cities" isGrid={true} hasPadding={false}>
        <OtherCitiesListBoxes />
      </Box>
    </main>
  );
}

export default MainContent;

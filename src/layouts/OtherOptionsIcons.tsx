import { Button } from "@/components/ui/button";
import { useWeatherStore } from "@/store";
import ErrorAlert from "@/utils/ErrorAlert";
import fetchWeatherDataByLocation from "@/utils/fetchWeatherDataByLocation ";
import getUserLocation from "@/utils/getUserLocation";
import { IoLocation } from "react-icons/io5";

// options---
const options = [{ title: "location", icon: <IoLocation fontSize={20} /> }];

type TGeoLocation = {
  lat: number;
  lon: number;
};

function OtherOptionsIcons() {
  // get the setWeatherData from the store----
  const setWeatherData = useWeatherStore((state) => state.setWeatherData);

  // handleClick---
  const handleClick = async (title: string) => {
    // Check on title to trigger the right function-----
    if (title === "location") {
      try {
        // Get the user location
        const geoLocation = await getUserLocation(); // Await the async function

        // Fetch weather data immediately after getting location----
        const data = await fetchWeatherDataByLocation(
          geoLocation as TGeoLocation,
        );

        // update the weather data in the store---
        setWeatherData(data);
      } catch (error) {
        // check on error to avoid typescript issue and Use the Alert component to display the error----
        if (error instanceof Error) {
          ErrorAlert({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      }
    }
  };

  return (
    <div className="other-options-box flex items-center gap-5 sm:gap-3 flex-wrap justify-center">
      {options.map((option) => (
        <Button
          key={option.title}
          className={`${option.title}-icon text-[#676b73] cursor-pointer transition-all active:translate-y-[5px] bg-[#0e1421] rounded-md hover:bg-[#22304e] hover:text-white`}
          onClick={() => handleClick(option.title)}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
}

export default OtherOptionsIcons;

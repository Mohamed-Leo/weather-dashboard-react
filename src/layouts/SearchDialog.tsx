import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import CommandSearchBox from "./CommandSearchBox";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import useFetchCitiesData from "@/hooks/useFetchCitiesData";
import { ICity } from "@/store";
import useFetchWeatherByCity from "@/hooks/useFetchWeatherByCity";

function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState<string>("");

  const [selectedCity, setSelectedCity] = useState("cairo");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleItemSelect = ({ name }: ICity) => {
    // update the search state value to empty---
    setSearchValue("");

    // Close the dialog when an item is selected
    setIsOpen(false);

    // update the selectedCity by the choosen city from the CityItemBox---
    setSelectedCity(name);
  };

  // call the api function with searchValue argument to fetch the cities data---------------------
  useFetchCitiesData(searchValue);

  /*
   * fetch the weahter data for the choosen city by city name
   * there is an issue when fetch by geolocation (lon and lat) with the openweather api coz it's rounding the lon and lat numbers
   */
  useFetchWeatherByCity(selectedCity);

  return (
    <div className="search-box w-full sm:w-fit">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="text-white bg-[#0e1421] hover:bg-[#22304e] gap-2 w-full sm:min-w-80 justify-normal"
          >
            {/* search-- */}
            <FaSearch />
            <span>Search Here...</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="p-0 border-none min-h-[50%] sm:min-h-fit text-white">
          {/* use VisuallyHidden component to hide title and Description but still work with screen readers */}
          <VisuallyHidden>
            <DialogTitle>Search Box By Cities</DialogTitle>
          </VisuallyHidden>

          <VisuallyHidden>
            <DialogDescription>this box for search by city</DialogDescription>
          </VisuallyHidden>

          {/* search box */}
          <CommandSearchBox
            handleInputChange={handleInputChange}
            searchValue={searchValue}
            handleItemSelect={handleItemSelect}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchDialog;

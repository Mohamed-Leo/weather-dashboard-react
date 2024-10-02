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
import { useEffect, useState } from "react";
import axios from "axios";

// api key---
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleItemSelect = (selectedItem: string) => {
    // update the state value---
    setSearchValue(selectedItem);
    // Close the dialog when an item is selected
    setIsOpen(false);
  };

  // sideEffect To call api when---------------------
  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherByCity = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=${apiKey}`,
        );

        const data = response.data;
        console.log(data);
        // check on data to send error if excist----
        if (data.length) throw new Error("invalid data");
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };

    // check on searchValue before call----
    if (!searchValue) return;
    // call the api---
    fetchWeatherByCity();

    return () => {
      controller.abort();
    };
  }, [searchValue]);

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

        <DialogContent className="p-0 border-none min-h-[50%] sm:min-h-fit">
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

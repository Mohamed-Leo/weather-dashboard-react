import CityItem from "@/components/CityItem";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { ICity, useWeatherStore } from "@/store";

interface ICommandSearchBoxProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemSelect: (city: ICity) => void;
  searchValue: string;
}

// suggestionsOptions
const suggestionsOptions = [
  {
    name: "Gaza",
    country: "PS",
    state: "Community of Madrid",
    lon: 34.4667,
    lat: 31.5,
  },
  {
    name: "Madrid",
    country: "ES",
    state: "Community of Madrid",
    lon: -3.7026,
    lat: 40.4165,
  },
  {
    name: "Barcelona",
    country: "ES",
    state: "Catalonia",
    lon: 2.159,
    lat: 41.3888,
  },
  {
    name: "Liverpool",
    country: "GB",
    state: "England",
    lon: -2.9779,
    lat: 53.4106,
  },
  {
    name: "Cairo",
    country: "EG",
    state: "Cairo",
    lon: 31.2497,
    lat: 30.0626,
  },
];

function CommandSearchBox({
  handleInputChange,
  handleItemSelect,
  searchValue,
}: ICommandSearchBoxProps) {
  // get the cities state from the store---
  const city = useWeatherStore((state) => state.city);

  return (
    <Command className="command-search-box bg-[#09090b] rounded-lg border shadow-md md:min-w-[450px] text-white">
      <CommandInput
        onChangeCapture={handleInputChange}
        value={searchValue}
        placeholder="search city..."
      />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Suggestions">
          {city.length !== 0
            ? city.map((city) => (
                <CityItem
                  key={`${city.name}-${city.country}`}
                  handleItemSelect={handleItemSelect}
                  city={city}
                />
              ))
            : suggestionsOptions.map((city, i) => (
                <CityItem
                  key={i}
                  handleItemSelect={handleItemSelect}
                  city={city}
                />
              ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandSearchBox;

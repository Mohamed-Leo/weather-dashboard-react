import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useWeatherStore } from "@/store";

interface ICommandSearchBoxProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemSelect: (selectedItem: string) => void;
  searchValue: string;
}

// suggestionsOptions
const suggestionsOptions = [
  {
    name: "Madrid",
    country: "ES",
    state: "Community of Madrid",
    lat: 40.4167047,
    lon: -3.7035825,
  },
  {
    name: "Barcelona",
    country: "ES",
    state: "Catalonia",
    lat: 41.3828939,
    lon: 2.1774322,
  },
  {
    name: "Liverpool",
    country: "GB",
    state: "England",
    lat: 53.4071991,
    lon: -2.99168,
  },
];

function CommandSearchBox({
  handleInputChange,
  handleItemSelect,
  searchValue,
}: ICommandSearchBoxProps) {
  // get the cities state from the store---
  const cities = useWeatherStore((state) => state.cities);
  console.log(cities);

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
          {suggestionsOptions.map((option, i) => (
            <CommandItem
              key={i}
              className="text-gray-400 data-[selected=true]:bg-[#27272a] data-[selected=true]:text-white my-2"
              onSelect={() => handleItemSelect(option.name)}
            >
              <span>{`${option.name}, ${option.state + "," || ","} ${option.country}`}</span>
            </CommandItem>
          ))}

          {cities.map((city, i) => {
            // destrucure city data----
            const { name, country, state } = city;
            return (
              <CommandItem
                key={i}
                className="text-gray-400 data-[selected=true]:bg-[#27272a] data-[selected=true]:text-white"
                onSelect={() => handleItemSelect(city.name)}
              >
                <span>{`${name}, ${state ? state + "," : ""} ${country}`}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandSearchBox;

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface ICommandSearchBoxProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemSelect: (selectedItem: string) => void;
  searchValue: string;
}

// suggestionsOptions
const suggestionsOptions = [
  { title: "Calendar" },
  { title: "Search Emoji" },
  { title: "Calculator" },
];

function CommandSearchBox({
  handleInputChange,
  handleItemSelect,
  searchValue,
}: ICommandSearchBoxProps) {
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
              className="text-gray-400 data-[selected=true]:bg-[#27272a] data-[selected=true]:text-white"
              onSelect={() => handleItemSelect(option.title)}
            >
              <span>{option.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandSearchBox;

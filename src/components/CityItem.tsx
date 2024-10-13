import { ICity } from "@/store";
import { CommandItem } from "./ui/command";

interface ICityItem {
	handleItemSelect: (city: ICity) => void;
	city: ICity;
}

function CityItem({ handleItemSelect, city }: ICityItem) {
	// destrucure city data----
	const { name, country, state } = city;

	return (
		<CommandItem
			value={`${name}-${country}`}
			className="text-gray-400 data-[selected=true]:bg-[#27272a] data-[selected=true]:text-white relative flex cursor-default"
			onSelect={() => handleItemSelect(city)}
		>
			<span>{`${name}, ${state ? state + "," : ""} ${country}`}</span>
		</CommandItem>
	);
}

export default CityItem;

import { CommandItem } from "./ui/command";
import { ICityItem } from "@/interfaces";

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

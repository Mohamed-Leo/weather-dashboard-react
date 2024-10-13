// this component for the event on flying for the map----
import { FlyToCityMapProps } from "@/interfaces";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function FlyToCityMap({ locationCoords }: FlyToCityMapProps) {
	const map = useMap();

	useEffect(() => {
		if (locationCoords) {
			const [lat, lon] = locationCoords;
			const zoomLevel = 13;
			const flyOptions = {
				duration: 1.5,
			};
			map.flyTo([lat, lon], zoomLevel, flyOptions);
		}
	}, [locationCoords, map]);

	return null;
}

export default FlyToCityMap;

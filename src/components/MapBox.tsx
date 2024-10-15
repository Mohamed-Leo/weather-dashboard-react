import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useWeatherStore } from "@/store";
import Loading from "@/layouts/Loading";
import FlyToCityMap from "./FlyToCityMap";

// Import Leaflet and the marker images to fix the image issue when deploy------
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix the default icon using images from the public folder
const DefaultIcon = L.icon({
	iconUrl: "marker-icon.png", // Public folder path
	shadowUrl: "marker-shadow.png",
	iconRetinaUrl: "marker-icon-2x.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

type TLocationCoords = [number, number];

function MapBox() {
	// get the weatherData form the store----
	const weatherData = useWeatherStore((state) => state.weatherData);

	// check on data to show loading----
	if (!weatherData) return <Loading />;

	// location---
	const locationCoords: TLocationCoords = [
		weatherData.coord.lat,
		weatherData.coord.lon,
	];

	return (
		<MapContainer
			center={locationCoords}
			zoom={13}
			scrollWheelZoom={false}
			className="min-h-80 relative z-10 h-full"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<FlyToCityMap locationCoords={locationCoords} />
			<Marker position={locationCoords}>
				<Popup>
					{weatherData.name}, {weatherData.sys.country}
					<br />
					Lat: {weatherData.coord.lat}, Lon: {weatherData.coord.lon}
				</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapBox;

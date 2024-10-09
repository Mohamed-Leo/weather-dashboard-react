import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useWeatherStore } from "@/store";
import Loading from "@/layouts/Loading";
import FlyToCityMap from "./FlyToCityMap";

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
      className="size-full z-10"
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

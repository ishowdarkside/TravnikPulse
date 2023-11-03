/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import { useTouristDataContext } from "../../context/TouristDataContext";
import L from "leaflet";
import MarkerCustomIcon from "../../assets/marker.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

const customIcon = L.icon({
  iconUrl: MarkerCustomIcon,
  iconSize: [32, 32], // Width and height of the icon,
  iconAnchor: [16, 32],
});

export default function Map({ setIsMarked }) {
  const { setPosition, position } = useTouristDataContext();
  const handleMapClick = (e) => {
    setIsMarked(true);
    setPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
  };

  return (
    <div className={styles.map}>
      <MapContainer
        center={[44.2294, 17.643]}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler onMapClick={handleMapClick} />
        {position && <Marker position={position} icon={customIcon} />}
      </MapContainer>
    </div>
  );
}

function MapClickHandler({ onMapClick }) {
  const map = useMapEvents({
    click: (e) => {
      onMapClick(e);
    },
  });
}

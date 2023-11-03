import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from './Map.module.scss';
import "leaflet/dist/leaflet.css";
export default function Map() {
  return (
     <div className={styles.map}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

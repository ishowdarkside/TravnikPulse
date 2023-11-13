import { useEffect, useRef } from 'react';
import { useGetRadiusTours, useGetTours } from '../../../hooks/useTours';
import { MapContainer, Marker, Popup, TileLayer, Circle  } from 'react-leaflet';
import Markers from '../Markers.jsx/Markers';
import { useGetAllShops, useGetRadiusShops } from '../../../hooks/useShops';
import styles from './MainMap.module.scss';
import { FaTimes } from 'react-icons/fa'
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import LeafletRouting from '../LeafletRouting/LeafletRouting';
import { useMapContext } from '../../../context/MapContext';
import allHotels from '../../../utils/hotels/hotel.json';



export default function MainMap() {
  const {
    activeFilter,
    setTourLocation,
    tourLocation,
    currentPosition,
    setCurrentPosition,
  } = useMapContext();
  const { data: tours, isLoading: toursLoading } = useGetTours();
  const { data: shops, isLoading: shopsLoading } = useGetAllShops();
  const { data: radiusTours, isLoading: radiusTourLoading } =
    useGetRadiusTours();
  const { data: radiusShops, isLoading: radiusShopLoading } =
    useGetRadiusShops();
  const cancelRouteRef = useRef();
  const TRAVNIK_COORS = [44.2304, 17.6566];
  
  useEffect(() => {
	const userLocation = JSON.parse(localStorage.getItem('position'))
	  setCurrentPosition([userLocation.lng, userLocation.lat])

	  
	}, [setCurrentPosition]);
	
	console.log(currentPosition)
  if (toursLoading || shopsLoading || radiusTourLoading || radiusShopLoading)
    return <h1>Loading...</h1>;

	const allData = [...radiusTours, ...radiusShops, ...allHotels.hotels]

	const activeData = activeFilter === 'shops' ? shops : activeFilter === 'hotels' ? allHotels.hotels : activeFilter === 'radius' || activeFilter === 'all' ? allData : activeFilter === 'tours' ? tours : null;
	

	// Check if currentPosition has a valid value before rendering the map
	if (!currentPosition || currentPosition.length !== 2) return null;

  const radiusInKm = 50;
  const radiusInMeters = radiusInKm * 1000;



  return (
    <>
      <MapContainer
        id={styles.map}
        center={TRAVNIK_COORS}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://api.mapbox.com/directions/v5">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {activeData.map((tour, index) => (
          <Markers key={index} tour={tour} setTourLocation={setTourLocation} />
        ))}

        <Marker position={currentPosition} />
        {activeFilter === "radius" && (
          <Circle center={currentPosition} radius={radiusInMeters} />
        )}

        {tourLocation !== null && (
          <button
            className={styles.cancelRoute}
            ref={cancelRouteRef}
            onClick={() => setTourLocation(null)}
          >
            <FaTimes />
          </button>
        )}
        {currentPosition && tourLocation ? (
          <>
            <LeafletRouting
              currentPosition={currentPosition}
              tourLocation={tourLocation}
              cancelRouteRef={cancelRouteRef}
            />
          </>
        ) : null}
      </MapContainer>
    </>
  );
}

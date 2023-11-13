import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

export default function LeafletRouting({ tourLocation, currentPosition, cancelRouteRef }) {
	const map = useMap();
	const routingControlRef = useRef(null);

	useEffect(() => {
		// Update map center when tourLocation changes
		if (tourLocation) {
		  map.setView(currentPosition, 15);
		}
	  }, [tourLocation, map]);

	useEffect(() => {
		// Create a new routing control if it doesn't exist
		if (!routingControlRef.current) {
			const routingControl = L.Routing.control({
				waypoints: [L.latLng(currentPosition), L.latLng(tourLocation)],
				lineOptions: {
					styles: [
						{
							color: '#437de0',
							weight: 5,
						},
					],
				},
        showAlternatives: false,
				routeWhileDragging: true,
        draggableWaypoints: false,
			});

			routingControlRef.current = routingControl;
		} else {
			// Update waypoints if the control already exists
			routingControlRef.current.getPlan().setWaypoints([L.latLng(currentPosition), L.latLng(tourLocation)]);
		}

		// Add the routing control to the map if it's not already added
		if (!map.hasLayer(routingControlRef.current)) {
			routingControlRef.current.addTo(map);
		}

		// Set up cancel route function
		const cancelRoute = () => {
			if (routingControlRef.current) {
				map.removeControl(routingControlRef.current);
				routingControlRef.current = null;
			}
		};

		// Assign the cancel route function to the button click event
		if (cancelRouteRef.current) {
			cancelRouteRef.current.addEventListener('click', cancelRoute);
		}

		return () => {
			// Cleanup on component unmount
			if (routingControlRef.current && map.hasLayer(routingControlRef.current)) {
				map.removeControl(routingControlRef.current);
				routingControlRef.current = null;
			}
			
			// Remove the event listener on component unmount
			if (cancelRouteRef.current) {
				cancelRouteRef.current.removeEventListener('click', cancelRoute);
			}
		};
	}, [map, currentPosition, tourLocation, cancelRouteRef]);

	return null;
}
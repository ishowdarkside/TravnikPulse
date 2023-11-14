import { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import MarkerCustomIcon from "../../../assets/marker.svg";
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMapContext } from '../../../context/MapContext';

export default function LeafletRouting({ tourLocation, currentPosition, cancelRouteRef }) {
	const map = useMap();
	const routingControlRef = useRef(null);
	const { travelTime, setTravelTime } = useMapContext();

	useEffect(() => {
		// Update map center when tourLocation changes
		if (tourLocation) {
			map.setView(currentPosition, 19);
		}
	}, [tourLocation, currentPosition, map]);

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
				createMarker: function (waypointIndex, waypoint, numberOfWaypoints) {
					const marker = L.marker(waypoint.latLng, {
						draggable: true, // Set to true if you want to allow dragging
						icon: L.icon({
							iconUrl: MarkerCustomIcon, // Specify the path to your custom icon
							iconSize: [32, 32], // Adjust the size of your icon as needed
							iconAnchor: [16, 32], // Adjust the anchor point if necessary
							popupAnchor: [0, -32], // Adjust the popup anchor if necessary
						}),
					});

					// You can add additional customization or event handling for the marker here

					return marker;
				},
			});

			// Add event listener for 'routesfound' event
			routingControl.on('routesfound', function (e) {
				const routes = e.routes;
				if (routes.length > 0) {
					const totalTimeInSeconds = routes[0].summary.totalTime; // total time in seconds
					const totalTimeInMinutes = totalTimeInSeconds / 60; // convert to minutes
					setTravelTime(totalTimeInMinutes.toFixed(0));
					console.log(totalTimeInMinutes.toFixed(0))
				}
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
				setTravelTime(null);

				// Reset map view to a larger distance
				map.setView(tourLocation, 15);
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

	return null
}
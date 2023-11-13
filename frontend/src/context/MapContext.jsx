import { createContext, useContext, useEffect, useState } from 'react';

const context = createContext();

export default function MapContext({ children }) {
	const [ activeFilter, setActiveFilter ] = useState('all');
	const [ tourLocation, setTourLocation ] = useState(null);
	const [ currentPosition, setCurrentPosition ] = useState([]);

	useEffect(
		() => {
			const userPosition = JSON.parse(localStorage.getItem('userPosition'));

			if (userPosition) {
				setCurrentPosition(userPosition);
			}
		},
		[ setCurrentPosition ]
	);

	useEffect(
		() => {
			localStorage.setItem('userPosition', JSON.stringify(currentPosition));
		},
		[ currentPosition ]
	);

	return (
		<context.Provider
			value={{
				activeFilter,
				setActiveFilter,
				tourLocation,
				setTourLocation,
				currentPosition,
				setCurrentPosition
			}}
		>
			{children}
		</context.Provider>
	);
}

export function useMapContext() {
	const data = useContext(context);
	if (!data) throw new Error("You can't use context here");
	return data;
}

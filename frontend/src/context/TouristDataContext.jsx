/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const context = createContext();

export default function TouristDataContext({ children }) {
	const [activePanel, setActivePanel] = useState('intro');
    const [language, setLanguage] = useState(null);
    const [selectedVisitPeriod, setSelectedVisitPeriod] = useState(null);
    const [visitCount, setVisitCount] = useState(null);
    const [position, setPosition] = useState(null);
    const [preferences, setPreferences] = useState([]);
    const [activePreference, setActivePreference] = useState('nightlife');
    const [suggestPlace, setSuggestPlace] = useState(false);

    useEffect(() => {
        const storageLanguage = JSON.parse(localStorage.getItem('language'));
		const storageSuggestion = JSON.parse(localStorage.getItem('suggestPlace'));

        if (storageLanguage && storageSuggestion) {
            setLanguage(storageLanguage);
			setSuggestPlace(storageSuggestion)
        }
    }, [setLanguage, setSuggestPlace]);

    useEffect(() => {
        localStorage.setItem('language', JSON.stringify(language));
        localStorage.setItem('suggestPlace', JSON.stringify(suggestPlace));
    }, [language, suggestPlace]);

	return (
		<context.Provider
			value={{
				activePanel,
				setActivePanel,
				language,
				setLanguage,
				selectedVisitPeriod,
				setSelectedVisitPeriod,
				visitCount,
				setVisitCount,
				position,
				setPosition,
				preferences,
				setPreferences,
				activePreference,
				setActivePreference,
				suggestPlace,
				setSuggestPlace
			}}
		>
			{children}
		</context.Provider>
	);
}

export function useTouristDataContext() {
	const data = useContext(context);
	if (!data) throw new Error("You can't use context here");
	return data;
}

/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const context = createContext();

export default function TouristDataContext({ children }) {
  const [activePanel, setActivePanel] = useState("intro");
  const [language, setLanguage] = useState("en");
  const [selectedVisitPeriod, setSelectedVisitPeriod] = useState(null);
  const [visitCount, setVisitCount] = useState(null);
  const [position, setPosition] = useState(null);
  const [preferences, setPreferences] = useState([]);
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

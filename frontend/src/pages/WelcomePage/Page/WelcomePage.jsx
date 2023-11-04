import { useEffect } from "react";
import Intro from "../Intro/Intro";
import Language from "../Language/Language";
import styles from "./WelcomePage.module.scss";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import Explore from "../Explore/Explore";
import TravelDetails from "../TravelDetails/TravelDetails";
import Location from "../Location/Location";
import Preference from "../Preferences/Preference";
import Proceed from "../Proceed/Proceed";

export default function WelcomePage() {
  const { activePanel, setActivePanel } = useTouristDataContext();
  useEffect(() => {
    setTimeout(() => {
      setActivePanel("language");
    }, 7000);
  }, []);
  return (
    <section className={styles.welcomeSection}>
      {activePanel === "intro" && <Intro />}
      {activePanel === "language" && <Language />}
      {activePanel === "explore" && <Explore />}
      {activePanel === "travelDetails" && <TravelDetails />}
      {activePanel === "locationDetails" && <Location />}
      {activePanel === "preferenceDetails" && <Preference />}
      {activePanel === "proceed" && <Proceed />}
    </section>
  );
}

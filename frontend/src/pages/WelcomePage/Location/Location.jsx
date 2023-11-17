import { AiOutlineArrowLeft } from "react-icons/ai";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import Map from "../../../components/Map/Map";
import styles from "./Location.module.scss";
import { useEffect, useState } from "react";

export default function Location() {
  const { activePanel, setActivePanel, position, setPosition } =
    useTouristDataContext();

  useEffect(() => {
    // Check if the browser supports geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully retrieved the user's location
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          // Handle errors, such as the user denying permission
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by your browser");
    }
  }, []); // Empty dependency array ensures the effect runs once after mount
  return (
    <section className={styles.locationSection}>
      <div className={styles.panel}>
        <button onClick={() => setActivePanel("travelDetailsCount")}>
          <AiOutlineArrowLeft />
        </button>
        <h2>Tell us where you are</h2>
        <p>
          By marking your location we will be able to suggest you best places in
          Travnik, nearby you
        </p>

        <Map />

        <button
          onClick={() => setActivePanel("preferenceDetails")}
          disabled={!position}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

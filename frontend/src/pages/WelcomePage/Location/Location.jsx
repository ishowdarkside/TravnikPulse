import { AiOutlineArrowLeft } from "react-icons/ai";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import Map from "../../../components/Map/Map";
import styles from "./Location.module.scss";
import { useState } from "react";

export default function Location() {
  const { activePanel, setActivePanel, position } = useTouristDataContext();

  return (
    <section className={styles.locationSection}>
      <div className={styles.panel}>
        <button onClick={() => setActivePanel("travelDetails")}>
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

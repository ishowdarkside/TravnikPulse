import { AiOutlineArrowLeft } from "react-icons/ai";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import PreferenceOptions from "../../../components/PreferenceOptions/PreferenceOptions";
import styles from "./Preference.module.scss";

export default function Preference() {
  const { preferences, setActivePanel } = useTouristDataContext();

  return (
    <section className={styles.preferenceSection}>
      <div className={styles.panel}>
        <button onClick={() => setActivePanel("locationDetails")}>
          <AiOutlineArrowLeft />
        </button>
        <h2>Select your preferences</h2>
        <p>
          Choose 5 preferences that you'd like to see while exploring Travnik
        </p>

        <PreferenceOptions />

        <button
          onClick={() => setActivePanel("preferenceDetails")}
          disabled={preferences.length === 0}
        >
          Submit Choices
        </button>
      </div>
    </section>
  );
}

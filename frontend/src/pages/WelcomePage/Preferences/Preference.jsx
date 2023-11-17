import { AiOutlineArrowLeft } from "react-icons/ai";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import PreferenceOptions from "../../../components/PreferenceOptions/PreferenceOptions";
import styles from "./Preference.module.scss";
import { useNavigate } from "react-router-dom";

export default function Preference() {
  const {
    selectedVisitPeriod,
    visitCount,
    position,
    preferences,
    setActivePanel,
    language,
    suggestPlace,
  } = useTouristDataContext();

  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("selectedVisitPeriod", selectedVisitPeriod);
    localStorage.setItem("visitCount", visitCount);
    localStorage.setItem("position", JSON.stringify(position));
    localStorage.setItem("preferences", JSON.stringify(preferences));
    localStorage.setItem("language", JSON.stringify(language));
    localStorage.setItem("suggestPlace", JSON.stringify(suggestPlace));

    navigate("/app");
  }

  return (
    <section className={styles.preferenceSection}>
      <div className={styles.panel}>
        <button onClick={() => setActivePanel("locationDetails")}>
          <AiOutlineArrowLeft />
        </button>
        <h2>Select your preferences</h2>
        <p>Choose preferences that you'd like to see while exploring Travnik</p>

        <PreferenceOptions />

        <button
          onClick={() => {
            setActivePanel("proceed");
            handleClick();
          }}
        >
          Submit Choices
        </button>
      </div>
    </section>
  );
}

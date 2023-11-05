import { useTouristDataContext } from "../../../context/TouristDataContext";
import styles from "./Proceed.module.scss";
import { useNavigate } from "react-router-dom";

export default function Proceed() {
  const { selectedVisitPeriod, visitCount, position, preferences, language } =
    useTouristDataContext();

  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("selectedVisitPeriod", selectedVisitPeriod);
    localStorage.setItem("visitCount", visitCount);
    localStorage.setItem("position", JSON.stringify(position));
    localStorage.setItem("preferences", JSON.stringify(preferences));
    localStorage.setItem("language", JSON.stringify(language));

    navigate("/app");
  }
  return (
    <section className={styles.proceedPanel}>
      <div>
        <h2>You are all set to go!</h2>
        <button onClick={handleClick}>Start exploring Travnik</button>
      </div>
    </section>
  );
}

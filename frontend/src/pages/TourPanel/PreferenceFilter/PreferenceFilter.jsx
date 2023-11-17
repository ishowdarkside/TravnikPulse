import { useTouristDataContext } from "../../../context/TouristDataContext";
import { allPreferences } from "../../../utils/data/AllPreferences";
import { IoAdd } from "react-icons/io5";
// SCSS
import styles from "./PreferenceFilter.module.scss";
import { useNavigate } from "react-router-dom";

export default function PreferenceFilter() {
  const { activePreference, setActivePreference } = useTouristDataContext();
  const userPreferences = JSON.parse(localStorage.getItem("preferences"));

  const navigate = useNavigate();
  return (
    <section className={styles.preferenceFilter}>
      {allPreferences
        .filter(({ preference }) => userPreferences.includes(preference))
        .map(({ preference, value, icon }, index) => (
          <div
            className={styles.preference}
            key={index}
            onClick={() => setActivePreference(preference)}
          >
            <div
              className={
                activePreference === preference
                  ? `${styles.icon} ${styles.active}`
                  : styles.icon
              }
            >
              {icon}
            </div>
            <span
              className={
                activePreference === preference
                  ? `${styles.span} ${styles.active}`
                  : styles.span
              }
            >
              {value}
            </span>
          </div>
        ))}

      <div
        className={styles.preference}
        onClick={() => navigate("/app/settings/preferences")}
      >
        <div className={styles.icon}>
          <IoAdd />
        </div>
        <span className={styles.span}>Add</span>
      </div>
    </section>
  );
}

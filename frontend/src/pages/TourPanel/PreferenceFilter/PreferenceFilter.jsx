import { useTouristDataContext } from "../../../context/TouristDataContext";
import { allPreferences } from "../../../utils/data/AllPreferences";
// SCSS
import styles from "./PreferenceFilter.module.scss";

export default function PreferenceFilter() {
  const { activePreference, setActivePreference } = useTouristDataContext();
  const userPreferences = JSON.parse(localStorage.getItem("preferences"));

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
    </section>
  );
}

import { useTouristDataContext } from "../../context/TouristDataContext";
import styles from "./PreferenceOptions.module.scss";

export default function PreferenceOptions() {
  const { preferences, setPreferences } = useTouristDataContext();

  function addPreference(p) {
    if (preferences.includes(p))
      return setPreferences((curr) => curr.filter((e) => e !== p));
    setPreferences((curr) => [...curr, p]);
  }

  return (
    <div className={styles.preferenceWrapper}>
      <div className={styles.grid}>
        <div
          onClick={() => addPreference("food")}
          className={preferences.includes("food") ? styles.activeOption : ""}
        >
          Food
        </div>
        <div
          onClick={() => addPreference("nightlife")}
          className={
            preferences.includes("nightlife") ? styles.activeOption : ""
          }
        >
          Nightlife
        </div>
        <div
          onClick={() => addPreference("art")}
          className={preferences.includes("art") ? styles.activeOption : ""}
        >
          Art
        </div>
        <div
          onClick={() => addPreference("history")}
          className={preferences.includes("history") ? styles.activeOption : ""}
        >
          History
        </div>
        <div
          onClick={() => addPreference("amenities")}
          className={
            preferences.includes("amenities") ? styles.activeOption : ""
          }
        >
          Amenities
        </div>
        <div
          onClick={() => addPreference("museums")}
          className={preferences.includes("museums") ? styles.activeOption : ""}
        >
          Museums
        </div>
        <div
          onClick={() => addPreference("movies")}
          className={preferences.includes("movies") ? styles.activeOption : ""}
        >
          Movies
        </div>
        <div
          onClick={() => addPreference("music")}
          className={preferences.includes("music") ? styles.activeOption : ""}
        >
          Music
        </div>
        <div
          onClick={() => addPreference("culture")}
          className={preferences.includes("culture") ? styles.activeOption : ""}
        >
          Culture
        </div>
        <div
          onClick={() => addPreference("dayTrip")}
          className={preferences.includes("dayTrip") ? styles.activeOption : ""}
        >
          Day Trips
        </div>
        <div
          onClick={() => addPreference("parks")}
          className={preferences.includes("parks") ? styles.activeOption : ""}
        >
          Parks
        </div>
        <div
          onClick={() => addPreference("science")}
          className={preferences.includes("science") ? styles.activeOption : ""}
        >
          Science
        </div>
        <div
          onClick={() => addPreference("sport")}
          className={preferences.includes("sport") ? styles.activeOption : ""}
        >
          Sport
        </div>
        <div
          onClick={() => addPreference("show")}
          className={preferences.includes("show") ? styles.activeOption : ""}
        >
          Show
        </div>
        <div
          onClick={() => addPreference("circus")}
          className={preferences.includes("circus") ? styles.activeOption : ""}
        >
          Circus
        </div>
        <div
          onClick={() => addPreference("events")}
          className={preferences.includes("events") ? styles.activeOption : ""}
        >
          {" "}
          Events
        </div>
        <div
          onClick={() => addPreference("seminars")}
          className={
            preferences.includes("seminars") ? styles.activeOption : ""
          }
        >
          Seminars
        </div>
        <div
          onClick={() => addPreference("river")}
          className={preferences.includes("river") ? styles.activeOption : ""}
        >
          River
        </div>
        <div
          onClick={() => addPreference("workshop")}
          className={
            preferences.includes("workshop") ? styles.activeOption : ""
          }
        >
          Workshops
        </div>
        <div
          onClick={() => addPreference("shopping")}
          className={
            preferences.includes("shopping") ? styles.activeOption : ""
          }
        >
          Shopping
        </div>
        <div
          onClick={() => addPreference("hiking")}
          className={preferences.includes("hiking") ? styles.activeOption : ""}
        >
          Hiking
        </div>
        <div
          onClick={() => addPreference("camping")}
          className={preferences.includes("camping") ? styles.activeOption : ""}
        >
          Camping
        </div>
        <div
          onClick={() => addPreference("outdoor")}
          className={preferences.includes("outdoor") ? styles.activeOption : ""}
        >
          Outdoor
        </div>
        <div
          onClick={() => addPreference("technology")}
          className={
            preferences.includes("technology") ? styles.activeOption : ""
          }
        >
          Technologoy
        </div>
        <div
          onClick={() => addPreference("coffeeShop")}
          className={
            preferences.includes("coffeeShop") ? styles.activeOption : ""
          }
        >
          Coffee Shops
        </div>
        <div
          onClick={() => addPreference("bikingRoutes")}
          className={
            preferences.includes("bikingRoutes") ? styles.activeOption : ""
          }
        >
          Biking Routes
        </div>
        <div
          onClick={() => addPreference("vegeterian")}
          className={
            preferences.includes("vegeterian") ? styles.activeOption : ""
          }
        >
          Vegeterian
        </div>
        <div
          onClick={() => addPreference("petFriendlyPlaces")}
          className={
            preferences.includes("petFriendlyPlaces") ? styles.activeOption : ""
          }
        >
          Pet-Friendly Places
        </div>
      </div>
    </div>
  );
}

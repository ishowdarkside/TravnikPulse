/* eslint-disable react/prop-types */
import styles from "./PreferencePanel.module.scss";

export default function PreferencePanel({
  selectedPreferences,
  setSelectedPreferences,
}) {
  function addPreference(p) {
    if (selectedPreferences.includes(p))
      return setSelectedPreferences((curr) => curr.filter((e) => e !== p));
    setSelectedPreferences((curr) => [...curr, p]);
  }

  return (
    <div className={styles.preferenceWrapper}>
      <div className={styles.grid}>
        <div
          onClick={() => addPreference("food")}
          className={
            selectedPreferences.includes("food") ? styles.activeOption : ""
          }
        >
          Food
        </div>
        <div
          onClick={() => addPreference("nightlife")}
          className={
            selectedPreferences.includes("nightlife") ? styles.activeOption : ""
          }
        >
          Nightlife
        </div>
        <div
          onClick={() => addPreference("art")}
          className={
            selectedPreferences.includes("art") ? styles.activeOption : ""
          }
        >
          Art
        </div>
        <div
          onClick={() => addPreference("history")}
          className={
            selectedPreferences.includes("history") ? styles.activeOption : ""
          }
        >
          History
        </div>
        <div
          onClick={() => addPreference("amenities")}
          className={
            selectedPreferences.includes("amenities") ? styles.activeOption : ""
          }
        >
          Amenities
        </div>
        <div
          onClick={() => addPreference("museums")}
          className={
            selectedPreferences.includes("museums") ? styles.activeOption : ""
          }
        >
          Museums
        </div>
        <div
          onClick={() => addPreference("movies")}
          className={
            selectedPreferences.includes("movies") ? styles.activeOption : ""
          }
        >
          Movies
        </div>
        <div
          onClick={() => addPreference("music")}
          className={
            selectedPreferences.includes("music") ? styles.activeOption : ""
          }
        >
          Music
        </div>
        <div
          onClick={() => addPreference("culture")}
          className={
            selectedPreferences.includes("culture") ? styles.activeOption : ""
          }
        >
          Culture
        </div>
        <div
          onClick={() => addPreference("dayTrip")}
          className={
            selectedPreferences.includes("dayTrip") ? styles.activeOption : ""
          }
        >
          Day Trips
        </div>
        <div
          onClick={() => addPreference("parks")}
          className={
            selectedPreferences.includes("parks") ? styles.activeOption : ""
          }
        >
          Parks
        </div>
        <div
          onClick={() => addPreference("science")}
          className={
            selectedPreferences.includes("science") ? styles.activeOption : ""
          }
        >
          Science
        </div>
        <div
          onClick={() => addPreference("sport")}
          className={
            selectedPreferences.includes("sport") ? styles.activeOption : ""
          }
        >
          Sport
        </div>
        <div
          onClick={() => addPreference("show")}
          className={
            selectedPreferences.includes("show") ? styles.activeOption : ""
          }
        >
          Show
        </div>
        <div
          onClick={() => addPreference("circus")}
          className={
            selectedPreferences.includes("circus") ? styles.activeOption : ""
          }
        >
          Circus
        </div>
        <div
          onClick={() => addPreference("events")}
          className={
            selectedPreferences.includes("events") ? styles.activeOption : ""
          }
        >
          {" "}
          Events
        </div>
        <div
          onClick={() => addPreference("seminars")}
          className={
            selectedPreferences.includes("seminars") ? styles.activeOption : ""
          }
        >
          Seminars
        </div>
        <div
          onClick={() => addPreference("river")}
          className={
            selectedPreferences.includes("river") ? styles.activeOption : ""
          }
        >
          River
        </div>
        <div
          onClick={() => addPreference("workshop")}
          className={
            selectedPreferences.includes("workshop") ? styles.activeOption : ""
          }
        >
          Workshops
        </div>
        <div
          onClick={() => addPreference("shopping")}
          className={
            selectedPreferences.includes("shopping") ? styles.activeOption : ""
          }
        >
          Shopping
        </div>
        <div
          onClick={() => addPreference("hiking")}
          className={
            selectedPreferences.includes("hiking") ? styles.activeOption : ""
          }
        >
          Hiking
        </div>
        <div
          onClick={() => addPreference("camping")}
          className={
            selectedPreferences.includes("camping") ? styles.activeOption : ""
          }
        >
          Camping
        </div>
        <div
          onClick={() => addPreference("outdoor")}
          className={
            selectedPreferences.includes("outdoor") ? styles.activeOption : ""
          }
        >
          Outdoor
        </div>
        <div
          onClick={() => addPreference("technology")}
          className={
            selectedPreferences.includes("technology")
              ? styles.activeOption
              : ""
          }
        >
          Technologoy
        </div>
        <div
          onClick={() => addPreference("coffeeShop")}
          className={
            selectedPreferences.includes("coffeeShop")
              ? styles.activeOption
              : ""
          }
        >
          Coffee Shops
        </div>
        <div
          onClick={() => addPreference("bikingRoutes")}
          className={
            selectedPreferences.includes("bikingRoutes")
              ? styles.activeOption
              : ""
          }
        >
          Biking Routes
        </div>
        <div
          onClick={() => addPreference("vegeterian")}
          className={
            selectedPreferences.includes("vegeterian")
              ? styles.activeOption
              : ""
          }
        >
          Vegeterian
        </div>
        <div
          onClick={() => addPreference("petFriendlyPlaces")}
          className={
            selectedPreferences.includes("petFriendlyPlaces")
              ? styles.activeOption
              : ""
          }
        >
          Pet-Friendly Places
        </div>
      </div>
    </div>
  );
}

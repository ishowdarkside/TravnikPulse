import styles from "./PreferenceOptions.module.scss";

export default function PreferenceOptions() {
  return (
    <div className={styles.preferenceWrapper}>
      <div className={styles.grid}>
        <div>Food</div>
        <div>Nightlife</div>
        <div>Art</div>
        <div>History</div>
        <div>Amenitis</div>
        <div>Museums</div>
        <div>Movies</div>
        <div>Music</div>
        <div>Sport</div>
      </div>
    </div>
  );
}

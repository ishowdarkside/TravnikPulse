/* eslint-disable react/prop-types */
import styles from "./EventComponent.module.scss";
export default function EventComponent({ tour }) {
  return (
    <div key={tour._id} className={styles.tourWrapper}>
      <img
        src={`http://127.0.1:8000/${tour.coverImg}`}
        alt="tour cover image"
      />

      <div className={styles.overlay}>
        <h3>{tour.name}</h3>
        <p>{tour.description.slice(0, 20)}...</p>
      </div>
    </div>
  );
}

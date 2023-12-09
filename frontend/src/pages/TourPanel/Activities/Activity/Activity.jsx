/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Activity.module.scss";

export default function Activity({ tour }) {
  return (
    <Link to={`/app/tour/${tour._id}`}>
      <div
        className={styles.activity}
        style={{ backgroundImage: `url(http://127.0.0.1:8000/${tour.coverImg})` }}
      >
        <div className={styles.activityOverlay} />
        <div className={styles.content}>
          <h2>{tour.name}</h2>
          <p>{tour.description.slice(0, 70)}...</p>
        </div>
      </div>
    </Link>
  );
}

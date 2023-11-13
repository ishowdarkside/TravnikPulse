/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./EventComponent.module.scss";
export default function EventComponent({ tour }) {
  const navigate = useNavigate();
  return (
    <div
      key={tour._id}
      className={styles.tourWrapper}
      onClick={() => navigate(`/app/tour/${tour._id}`)}
    >
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

/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Me.module.scss";

export default function PrevReviewComponent({ review }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/app/tour/${review.tour._id}`)}>
      <img
        src={`http://127.0.1:8000/${review.tour.coverImg}`}
        alt="cover image"
      />
      <span>{review.tour.name}</span>
      <span
        className={`${styles.reviewStatus} ${
          review.approved ? styles.approved : ""
        }`}
      >
        {review.approved ? "Approved by admin" : "Under Review"}
      </span>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./ReviewComponent.module.scss";

export default function ReviewComponent({ i, review }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.reviewItem}
      onClick={() => navigate(`/app/admin/reviews/${review._id}`)}
    >
      <div className={styles.index}>{i}</div>
      <p>
        <b>{review.user.username} </b> left a review on tour "{review.tour.name}
        "
      </p>
    </div>
  );
}

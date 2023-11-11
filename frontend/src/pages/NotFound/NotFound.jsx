import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundPage}>
      <button onClick={() => navigate(-1)} className={styles.returnBtn}>
        &larr;
      </button>
      <span>Tour not found 😢</span>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import styles from "./ReturnButton.module.scss";

export default function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={styles.returnBtn}>
      &larr;
    </button>
  );
}

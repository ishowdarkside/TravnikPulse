/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./ReturnButton.module.scss";

export default function ReturnButton({ app }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(app ? "/app" : -1)}
      className={styles.returnBtn}
    >
      &larr;
    </button>
  );
}

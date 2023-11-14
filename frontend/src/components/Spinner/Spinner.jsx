import styles from "./Spinner.module.scss";
import { createPortal } from "react-dom";
import { SpinnerCircularSplit } from "spinners-react";

export default function Spinner() {
  return createPortal(
    <div className={styles.reactWrapper}>
      <SpinnerCircularSplit color="#f37022" secondaryColor="#612705" />,
    </div>,
    document.body
  );
}

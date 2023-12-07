import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
export default function Modal({ resetSettings, setIsOpenModal }) {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <span>
          Are you sure that you want to reset all settings (Preferences,
          Location, etc..)?
        </span>

        <div className={styles.btnWrapper}>
          <button onClick={() => resetSettings()}>YES</button>
          <button onClick={() => setIsOpenModal(false)}>NO</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

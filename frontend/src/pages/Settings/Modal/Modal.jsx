import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
export default function Modal({ resetSettings, setIsOpenModal }) {
  return createPortal(
    <div className={styles.modal}>
      <h3>
        Are you sure that you want to reset all settings (Preferences, Location,
        etc..)?
      </h3>

      <div>
        <button onClick={() => resetSettings()}>YES</button>
        <button onClick={() => setIsOpenModal(false)}>NO</button>
      </div>
    </div>,
    document.body
  );
}

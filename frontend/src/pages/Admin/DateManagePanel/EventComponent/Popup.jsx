/* eslint-disable react/prop-types */

import { createPortal } from "react-dom";
import styles from "./Popup.module.scss";
import { deleteTour } from "../../../../services/tourServices";
import { useQueryClient } from "@tanstack/react-query";

export default function Popup({ tour, setIsOpenModal }) {
  const queryClient = useQueryClient();
  async function handleDelete() {
    await deleteTour(tour._id);
    queryClient.invalidateQueries(["tours"]);
    setIsOpenModal(false);
  }
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <h3>Are you sure that you want to delete tour {tour.name}</h3>
        <div className={styles.btnWrapper}>
          <button onClick={() => handleDelete()}>Yes</button>
          <button onClick={() => setIsOpenModal(false)}>No</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

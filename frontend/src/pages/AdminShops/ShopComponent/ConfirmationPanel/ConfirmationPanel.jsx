/* eslint-disable react/prop-types */
import { useDeleteShop } from "../../../../hooks/useShops";
import Spinner from "../../../../components/Spinner/Spinner";
import { createPortal } from "react-dom";
import styles from "./ConfirmationPanel.module.scss";
export default function ConfirmationPanel({ shop, onClosePanel }) {
  const { mutate, isLoading } = useDeleteShop();
  if (isLoading) return <Spinner />;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.panel}>
        <span>Are you sure that you want to delete {shop.shopName}</span>
        <div className={styles.btnWrapper}>
          <button
            disabled={isLoading}
            onClick={() => {
              mutate(shop._id, { onSuccess: () => onClosePanel(false) });
            }}
          >
            {isLoading ? "Deleting..." : "YES"}
          </button>
          <button onClick={() => onClosePanel(false)}>No</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

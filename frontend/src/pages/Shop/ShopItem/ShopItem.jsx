import styles from "./ShopItem.module.scss";

export default function ShopItem({ data }) {
  return (
    <div
      className={styles.shopItem}
      style={{ backgroundImage: `url(http://127.0.1:8000/${data.coverImg})` }}
    >
      <div className={styles.shopItemOverlay}></div>
      <h3 className={styles.text}>{data.shopName}</h3>
    </div>
  );
}

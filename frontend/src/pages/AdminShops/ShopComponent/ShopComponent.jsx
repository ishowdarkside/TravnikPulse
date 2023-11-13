import styles from "./ShopComponent.module.scss";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
export default function ShopComponent(shop) {
  const shopObj = Object.values(shop)?.at(0);
  return (
    <div className={styles.shopWrapper}>
      <img src={`http://127.0.1:8000/${shopObj.coverImg}`} alt="shop image" />
      <h3>{shopObj.shopName}</h3>

      <div className={styles.operationWrapper}>
        <button>
          <BiEdit />
        </button>

        <button>
          <BsTrash />
        </button>
      </div>
    </div>
  );
}

import ReturnButton from "../../components/ReturnButton/ReturnButton";
import CreateShopFrom from "./CreateShopForm/CreateShopForm";
import styles from "./CreateShop.module.scss";

export default function CreateShop() {
  return (
    <>
      <ReturnButton />
      <section className={styles.sectionBody}>
        <h1>Create Shop</h1>
        <CreateShopFrom />
      </section>
    </>
  );
}

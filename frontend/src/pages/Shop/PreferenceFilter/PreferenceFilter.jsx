import { useEffect } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import { useGetAllShops } from "../../../hooks/useShops";

import styles from "./PreferenceFilter.module.scss";
import { useTranslation } from "react-i18next";

export default function PreferenceFilter() {
  const { activeShopPreference, setActiveShopPreference } =
    useTouristDataContext();
  const [t] = useTranslation('main');

  const { data: shops, isLoading } = useGetAllShops();

  useEffect(() => {
    if (isLoading) return;

    setActiveShopPreference(shops.at(0).category);
  }, [isLoading]);
  if (isLoading) return <Spinner />;

  return (
    <section className={styles.preferenceFilter}>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("clothing")}
      >
        <div
          className={
            activeShopPreference === "clothing"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.1")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("souvenir shops")}
      >
        <div
          className={
            activeShopPreference === "souvenir shops"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.2")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("art")}
      >
        <div
          className={
            activeShopPreference === "art"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.3")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("bookstores")}
      >
        <div
          className={
            activeShopPreference === "bookstores"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.4")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("jewelry")}
      >
        <div
          className={
            activeShopPreference === "jewelry"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.5")}
        </div>
      </div>{" "}
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("home decor")}
      >
        <div
          className={
            activeShopPreference === "home decor"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.6")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("electronics")}
      >
        <div
          className={
            activeShopPreference === "electronics"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.7")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("food")}
      >
        <div
          className={
            activeShopPreference === "food"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.8")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("grocery")}
      >
        <div
          className={
            activeShopPreference === "grocery"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.9")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("music store")}
      >
        <div
          className={
            activeShopPreference === "music store"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.10")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("beauty and cosmetics")}
      >
        <div
          className={
            activeShopPreference === "beauty and cosmetics"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.11")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("toys and games")}
      >
        <div
          className={
            activeShopPreference === "toys and games"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.12")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("sports and fitness")}
      >
        <div
          className={
            activeShopPreference === "sports and fitness"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.13")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("pet shops")}
      >
        <div
          className={
            activeShopPreference === "pet shops"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.14")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("tech and gadgets")}
      >
        <div
          className={
            activeShopPreference === "tech and gadgets"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.15")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("shoe stores")}
      >
        <div
          className={
            activeShopPreference === "shoe stores"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.16")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("health and wellness")}
      >
        <div
          className={
            activeShopPreference === "health and wellness"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.17")}
        </div>
      </div>
      <div
        className={styles.preference}
        onClick={() => setActiveShopPreference("florists")}
      >
        <div
          className={
            activeShopPreference === "florists"
              ? `${styles.icon} ${styles.active}`
              : styles.icon
          }
        >
          {t("main_page_shop.preferences.18")}
        </div>
      </div>
    </section>
  );
}

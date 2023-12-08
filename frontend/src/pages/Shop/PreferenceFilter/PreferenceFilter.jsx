import { useEffect } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import { useGetAllShops } from "../../../hooks/useShops";

import styles from "./PreferenceFilter.module.scss";

export default function PreferenceFilter() {
  const { activeShopPreference, setActiveShopPreference } =
    useTouristDataContext();

  const { data: shops, isLoading } = useGetAllShops();

  useEffect(() => {
    if (isLoading) return;

    setActiveShopPreference(shops.at(0).category);
  }, [isLoading]);
  if (isLoading) return <Spinner />;

  const allShopsGrouped = Object.entries(groupShopsByCategory(shops));
  return (
    <section className={styles.preferenceFilter}>
      {allShopsGrouped.map(([preference], index) => (
        <div
          className={styles.preference}
          key={index}
          onClick={() => setActiveShopPreference(preference)}
        >
          <div
            className={
              activeShopPreference === preference
                ? `${styles.icon} ${styles.active}`
                : styles.icon
            }
          >
            {preference}
          </div>
        </div>
      ))}
    </section>
  );
}

function groupShopsByCategory(shopsArray) {
  // Use reduce to group the shops by category
  const groupedShops = shopsArray.reduce((result, shop) => {
    // Check if the category already exists in the result
    if (!result[shop.category]) {
      // If not, create a new array for that category
      result[shop.category] = [];
    }
    // Push the shop to the category array
    result[shop.category].push(shop);
    return result;
  }, {});

  return groupedShops;
}

import styles from "./CategoryPalete.module.scss";
export default function CategoryPalete({ category, setCategory }) {
  return (
    <div className={styles.categoryGridWrapper}>
      <div
        className={category === "clothing" ? styles.activeOption : ""}
        onClick={() => setCategory("clothing")}
      >
        Clothing
      </div>
      <div
        className={category === "souvenir shops" ? styles.activeOption : ""}
        onClick={() => setCategory("souvenir shops")}
      >
        Souvenir Shops
      </div>
      <div
        className={category === "art" ? styles.activeOption : ""}
        onClick={() => setCategory("art")}
      >
        Art
      </div>
      <div
        className={category === "bookstores" ? styles.activeOption : ""}
        onClick={() => setCategory("bookstores")}
      >
        Bookstores
      </div>
      <div
        className={category === "jewelry" ? styles.activeOption : ""}
        onClick={() => setCategory("jewelry")}
      >
        {" "}
        Jewelry
      </div>
      <div
        className={category === "home decor" ? styles.activeOption : ""}
        onClick={() => setCategory("home decor")}
      >
        Home Decor
      </div>
      <div
        className={category === "electronics" ? styles.activeOption : ""}
        onClick={() => setCategory("electronics")}
      >
        Electronics
      </div>
      <div
        className={category === "food" ? styles.activeOption : ""}
        onClick={() => setCategory("food")}
      >
        Food
      </div>
      <div
        className={category === "grocery" ? styles.activeOption : ""}
        onClick={() => setCategory("grocery")}
      >
        Grocery
      </div>
      <div
        className={category === "music store" ? styles.activeOption : ""}
        onClick={() => setCategory("music store")}
      >
        Music store
      </div>
      <div
        className={
          category === "beauty and cosmetics" ? styles.activeOption : ""
        }
        onClick={() => setCategory("beauty and cosmetics")}
      >
        Beauty and Cosmetics
      </div>
      <div
        className={category === "toys and games" ? styles.activeOption : ""}
        onClick={() => setCategory("toys and games")}
      >
        Toys and Games
      </div>
      <div
        className={category === "sports and fitness" ? styles.activeOption : ""}
        onClick={() => setCategory("sports and fitness")}
      >
        Sports and Fitness
      </div>
      <div
        className={category === "pet shops" ? styles.activeOption : ""}
        onClick={() => setCategory("pet shops")}
      >
        Pet Shops
      </div>
      <div
        className={category === "tech and gadgets" ? styles.activeOption : ""}
        onClick={() => setCategory("tech and gadgets")}
      >
        Tech and Gadgets
      </div>
      <div
        className={category === "shoe stores" ? styles.activeOption : ""}
        onClick={() => setCategory("shoe stores")}
      >
        Shoe Stores
      </div>
      <div
        className={
          category === "health and wellness" ? styles.activeOption : ""
        }
        onClick={() => setCategory("health and wellness")}
      >
        Health and Wellness
      </div>
      <div
        className={category === "florists" ? styles.activeOption : ""}
        onClick={() => setCategory("florists")}
      >
        Florists
      </div>
    </div>
  );
}

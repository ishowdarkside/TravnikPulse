// Components
import Activity from "./Activity/Activity";
// SCSS
import styles from "./Activities.module.scss";
import { useGetTours } from "../../../hooks/useTours";
import { useTouristDataContext } from "../../../context/TouristDataContext";

export default function Activities() {
  const { data, isLoading } = useGetTours();
  const { activePreference } = useTouristDataContext();

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <section className={styles.activities}>
      {data.filter(({ categories }) => categories.includes(activePreference)).map((tour) => (
        <Activity tour={tour} key={tour._id} />
      ))}
    </section>
  );
}

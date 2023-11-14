// Components
import Activity from "./Activity/Activity";
// SCSS
import styles from "./Activities.module.scss";
import { useGetTours } from "../../../hooks/useTours";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import Spinner from "../../../components/Spinner/Spinner";

export default function Activities() {
  const { data, isLoading } = useGetTours();
  const { activePreference } = useTouristDataContext();

  if (isLoading) return <Spinner />;

  return (
    <section className={styles.activities}>
      {data &&
        data
          .filter(({ categories }) => categories.includes(activePreference))
          .map((tour) => <Activity tour={tour} key={tour._id} />)}
    </section>
  );
}

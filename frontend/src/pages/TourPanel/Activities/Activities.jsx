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
  const selectedTours = data.filter(({ categories, date, time }) => {
    const hours = +time.split(":").at(0);
    const minutes = +time.split(":").at(1);

    return (
      categories.includes(activePreference) &&
      new Date(date).setHours(hours, minutes) >= new Date().getTime()
    );
  });

  console.log(selectedTours);
  return (
    <section className={styles.activities}>
      {selectedTours.length === 0 && (
        <span className={styles.noActivities}>
          No tours for this category 😢
        </span>
      )}
      {data &&
        selectedTours.map((tour) => <Activity tour={tour} key={tour._id} />)}
    </section>
  );
}

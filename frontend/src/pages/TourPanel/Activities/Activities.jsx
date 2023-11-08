// Components
import Activity from "./Activity/Activity";
// SCSS
import styles from "./Activities.module.scss";
import { useGetTours } from "../../../hooks/useTours";

export default function Activities() {
  const { data, isLoading } = useGetTours();

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <section className={styles.activities}>
      {data.map((tour) => (
        <Activity tour={tour} key={tour._id} />
      ))}
    </section>
  );
}

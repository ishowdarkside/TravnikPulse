import { useGetSingleTour } from "../../../hooks/useTours";
import styles from "./EditTourAdmin.module.scss";

export default function EditTourAdmin() {
  const { data, isLoading } = useGetSingleTour();

  return (
    <section>
      <form>
        <h1>Create new event</h1>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title goes here" />
        </div>
      </form>
    </section>
  );
}

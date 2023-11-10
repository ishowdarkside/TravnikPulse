import { useAdminContext } from "../../../context/AdminContext";
import { useGetTours } from "../../../hooks/useTours";
import { formatDate, weekdays } from "../../../services/dateServices";
import styles from "./DateManagePanel.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import EventComponent from "./EventComponent/EventComponent";

export default function DateManagePanel() {
  const { data, isLoading } = useGetTours();
  const { activeDate, setActiveDate } = useAdminContext();

  if (isLoading) return <h1>LOADING...</h1>;

  const matchingDateTours = data.filter(
    (tour) => formatDate(tour.date) === formatDate(activeDate)
  );

  const dayFormated = `${new Date(activeDate).getDate()} ${
    weekdays[new Date(activeDate).getDay()]
  }`;
  return (
    <div className={styles.panel}>
      <span className={styles.panelDate}>{dayFormated}</span>

      <div className={styles.plusDiv}>
        <AiOutlinePlus />
      </div>
      <button onClick={() => setActiveDate(null)} className={styles.closePanel}>
        <AiOutlineClose />
      </button>
      <div className={styles.toursWrapper}>
        {matchingDateTours.map((tour) => (
          <EventComponent tour={tour} key={tour._id} />
        ))}
      </div>
    </div>
  );
}

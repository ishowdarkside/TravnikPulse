import Calendar from "react-calendar";
import { useGetTours } from "../../../hooks/useTours";
import styles from "./EventCalendar.module.scss";
import { useAdminContext } from "../../../context/AdminContext";
import { formatDate, weekdays } from "../../../services/dateServices";
import Spinner from "../../../components/Spinner/Spinner";
//import "react-calendar/dist/Calendar.css";

export default function EventCalendar() {
  const { data, isLoading } = useGetTours();
  const { setActiveDate } = useAdminContext();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        className={styles.calendar}
        tileContent={({ date, view }) => {
          const toursOnDate = data.filter(
            (tour) => formatDate(tour.date) === formatDate(date)
          );

          return (
            <>
              {view === "month" && (
                <span className={styles.day}>
                  {` ${weekdays[new Date(date).getDay()]}`}
                </span>
              )}

              {toursOnDate.length > 0 && (
                <>
                  <div className={styles.imgWrapper}>
                    {toursOnDate.slice(0, 3).map((tour) => (
                      <img
                        src={`http://127.0.1:8000/${tour.coverImg}`}
                        key={tour._id}
                      />
                    ))}
                  </div>
                  <span>{toursOnDate.length} events</span>
                </>
              )}
            </>
          );
        }}
        onChange={(e) => {
          setActiveDate(e);
        }}
        tileClassName={({ date }) => {
          const toursOnDate = data.filter(
            (tour) => formatDate(tour.date) === formatDate(date)
          );
          const today = formatDate(new Date()) === formatDate(date);
          if (toursOnDate.length > 0 && !today)
            return `${styles.haveEvent} ${styles.dateBox}`;
          return today ? `${styles.dateBox} ${styles.today}` : styles.dateBox;
        }}
        showNeighboringMonth={false}
      />
    </div>
  );
}

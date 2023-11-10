/* eslint-disable react/prop-types */
import Calendar from "react-calendar";
import { useGetTours } from "../../hooks/useTours";
import styles from "./ClientCalendar.module.scss";
import { formatDate, weekdays } from "../../services/dateServices";

export default function ClientCalendar({ setActiveDate }) {
  const { data, isLoading } = useGetTours();

  if (isLoading) return <h1>LOADING...</h1>;

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
        tileClassName={styles.dateBox}
        showNeighboringMonth={false}
      />
    </div>
  );
}
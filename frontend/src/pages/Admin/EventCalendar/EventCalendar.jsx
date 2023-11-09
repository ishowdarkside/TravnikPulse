import Calendar from "react-calendar";
import { useGetTours } from "../../../hooks/useTours";
import styles from "./EventCalendar.module.scss";
//import "react-calendar/dist/Calendar.css";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export default function EventCalendar() {
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
        onChange={(e) => console.log(e)}
        tileClassName={styles.dateBox}
        showNeighboringMonth={false}
      />
    </div>
  );
}

function formatDate(date) {
  const dateFormatted = new Date(date);
  const year = dateFormatted.getFullYear();
  const month = dateFormatted.getMonth();
  const day = dateFormatted.getDate();
  return `${year}-${month}-${day}`;
}

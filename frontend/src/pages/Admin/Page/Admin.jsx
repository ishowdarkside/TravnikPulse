import { Navigate } from "react-router-dom";
import { useGetUser } from "../../../hooks/useAuth";
import styles from "./Admin.module.scss";
import EventCalendar from "../EventCalendar/EventCalendar";

export default function Admin() {
  const { data, isLoading } = useGetUser();

  if (isLoading) return <h1>LOADING...</h1>;
  if (!isLoading && data.role && data.role !== "admin")
    return <Navigate to="/app" />;
  return (
    <section className={styles.section}>
      <EventCalendar />
    </section>
  );
}

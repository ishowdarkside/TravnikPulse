import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { useAdminContext } from "../../context/AdminContext";
import DateManagePanel from "../Admin/DateManagePanel/DateManagePanel";
import EventCalendar from "../Admin/EventCalendar/EventCalendar";
import styles from "./AdminCalendar.module.scss";

export default function AdminCalendar() {
  const { activeDate } = useAdminContext();
  return (
    <section className={styles.section}>
      <ReturnButton />
      <EventCalendar />
      {activeDate && <DateManagePanel />}
    </section>
  );
}

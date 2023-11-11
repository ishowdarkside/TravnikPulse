import styles from "./Admin.module.scss";
import EventCalendar from "../EventCalendar/EventCalendar";
import { useAdminContext } from "../../../context/AdminContext";
import DateManagePanel from "../DateManagePanel/DateManagePanel";

export default function Admin() {
  const { activeDate } = useAdminContext();

  return (
    <section className={styles.section}>
      <EventCalendar />
      {activeDate && <DateManagePanel />}
    </section>
  );
}

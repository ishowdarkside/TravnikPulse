import { useState } from "react";
import ClientCalendar from "../ClientCalendar";
import styles from "./Page.module.scss";
import Navbar from "../../Tour/Navbar/Navbar";
import DateManagePanel from "../DateManagePanel/DateManagePanel";

export default function CalendarPage() {
  const [activeDate, setActiveDate] = useState(null);
  return (
    <section>
      <Navbar />
      <ClientCalendar setActiveDate={setActiveDate} />
      {activeDate && (
        <DateManagePanel
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
      )}
    </section>
  );
}

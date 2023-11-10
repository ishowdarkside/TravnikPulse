import { Link } from "react-router-dom";
import TravnikPulseLogo from "../../assets/simple-logo.png";
import { BsCalendar2Date } from "react-icons/bs";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <img
          src={TravnikPulseLogo}
          alt="TravnikPulse"
          className={styles.text}
        />
        <Link to="/app/calendar" className={styles.calendar}>
          <BsCalendar2Date />
        </Link>
      </nav>
    </>
  );
}

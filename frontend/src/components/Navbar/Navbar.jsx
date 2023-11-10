import { Link } from "react-router-dom";
import TravnikPulseLogo from "../../assets/simple-logo.png";
import styles from "./Navbar.module.scss";
import { AiOutlineCalendar } from "react-icons/ai";

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
          <AiOutlineCalendar />
        </Link>
      </nav>
    </>
  );
}

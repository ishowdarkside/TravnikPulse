import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import TravnikPulseLogo from "../../../assets/simple-logo.png";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/app" className={styles.sos}>
        <AiOutlineLeft />
      </Link>
      <img src={TravnikPulseLogo} alt="TravnikPulse" className={styles.text} />
    </nav>
  );
}

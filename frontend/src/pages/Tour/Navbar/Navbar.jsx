import TravnikPulseLogo from "../../../assets/simple-logo.png";
import styles from "./Navbar.module.scss";
import ReturnButton from "../../../components/ReturnButton/ReturnButton";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ReturnButton />
      <img src={TravnikPulseLogo} alt="TravnikPulse" className={styles.text} />
    </nav>
  );
}

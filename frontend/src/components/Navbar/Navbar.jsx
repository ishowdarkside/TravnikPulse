import { Link } from "react-router-dom";
import TravnikPulseLogo from '../../assets/simple-logo.png'
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
                <img src={TravnikPulseLogo} alt="TravnikPulse" className={styles.text} />
                <Link to='/sos' className={styles.sos}>SOS</Link>
            </nav>
        </>
    )
}
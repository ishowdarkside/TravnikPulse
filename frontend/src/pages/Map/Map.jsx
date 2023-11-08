import MobileNav from '../../components/MobileNav/MobileNav';
import Navbar from '../../components/Navbar/Navbar';
// SCSS
import styles from './Map.module.scss';

export default function Map() {
    return (
        <div className={styles.mapWrapper}>
            <Navbar />
            <h1>Map</h1>
            <MobileNav />
        </div>
    )
}
import Navbar from '../../components/Navbar/Navbar';
import MapFilter from './MapFilter/MapFilter';
import MainMap from './MainMap/MainMap';
import MobileNav from '../../components/MobileNav/MobileNav';
// SCSS
import styles from './Map.module.scss';

export default function Map() {
	return (
		<div className={styles.mapWrapper}>
			<Navbar />
			<MapFilter />
			<MainMap />
			<MobileNav />
		</div>
	);
}

import { useMapContext } from '../../../context/MapContext';
import styles from './MapFilter.module.scss';

export default function MapFilter() {
    const { setActiveFilter, activeFilter, tourLocation } = useMapContext();
    return tourLocation === null && (
        <section className={styles.mapFilter}>
            <div className={activeFilter === 'all' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('all')}>All</div>
            <div className={activeFilter === 'radius' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('radius')}>Radius</div>
            <div className={activeFilter === 'tours' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('tours')}>Events</div>
            <div className={activeFilter === 'hotels' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('hotels')}>Hotels</div>
            <div className={activeFilter === 'shops' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('shops')}>Shops</div>
        </section>
    )
}
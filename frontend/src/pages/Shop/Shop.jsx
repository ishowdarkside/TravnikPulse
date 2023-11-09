import MobileNav from '../../components/MobileNav/MobileNav';
import Navbar from '../../components/Navbar/Navbar';
import PreferenceFilter from './PreferenceFilter/PreferenceFilter';
import Shops from './Shops/Shops';
import styles from './Shop.module.scss';

export default function Shop() {
    return (
        <div className={styles.shopWrapper}>
            <Navbar />
            <PreferenceFilter />
            <Shops />
            <MobileNav />
        </div>
    )
}
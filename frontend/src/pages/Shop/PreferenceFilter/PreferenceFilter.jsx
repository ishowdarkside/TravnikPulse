import { useTouristDataContext } from '../../../context/TouristDataContext';
import { allShopPreferences } from '../../../utils/data/AllShopPreferences';
import styles from './PreferenceFilter.module.scss';

export default function PreferenceFilter() {
	const { activeShopPreference, setActiveShopPreference } = useTouristDataContext();
	return (
		<section className={styles.preferenceFilter}>
			{allShopPreferences.map(({ preference, value, icon }, index) => (
					<div className={styles.preference} key={index} onClick={() => setActiveShopPreference(preference)}>
						<div className={activeShopPreference === preference ? `${styles.icon} ${styles.active}` : styles.icon}>{icon}</div>
						<span className={activeShopPreference === preference ? `${styles.span} ${styles.active}` : styles.span}>{value}</span>
					</div>
				))}
		</section>
	);
}

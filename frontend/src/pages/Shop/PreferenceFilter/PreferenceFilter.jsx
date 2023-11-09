import { allShopPreferences } from '../../../utils/data/AllShopPreferences';
import styles from './PreferenceFilter.module.scss';

export default function PreferenceFilter() {
	return (
		<section className={styles.preferenceFilter}>
			{allShopPreferences.map(({ value, icon }, index) => (
					<div className={styles.preference} key={index}>
						<div className={styles.icon}>{icon}</div>
						<span className={styles.span}>{value}</span>
					</div>
				))}
		</section>
	);
}

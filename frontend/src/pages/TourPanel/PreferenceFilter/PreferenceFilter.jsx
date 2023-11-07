import { allPreferences } from '../../../utils/data/AllPreferences';
// SCSS
import styles from './PreferenceFilter.module.scss';

export default function PreferenceFilter() {
    const userPreferences = JSON.parse(localStorage.getItem('preferences'));

    return (
        <section className={styles.preferenceFilter}>
            {allPreferences.filter(({preference}) => userPreferences.includes(preference)).map(({value, icon}, index) => (
                <div className={styles.preference} key={index}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                    <span className={styles.span}>{value}</span>
                </div>
            ))}
        </section>
    )
}
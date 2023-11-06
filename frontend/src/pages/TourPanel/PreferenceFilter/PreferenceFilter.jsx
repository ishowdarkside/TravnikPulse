// React icons
import { BiSolidDrink } from 'react-icons/bi'
import { MdOutlineFastfood, MdOutlineSportsSoccer } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb'
// SCSS
import styles from './PreferenceFilter.module.scss';

export default function PreferenceFilter() {
    return (
        <section className={styles.preferenceFilter}>
            <div className={styles.preference}>
                <div className={`${styles.icon} ${styles.active}`}>
                    <BiSolidDrink />
                </div>
                <span className={`${styles.span} ${styles.active}`}>Nightlife</span>
            </div>

            <div className={styles.preference}>
                <div className={styles.icon}>
                    <MdOutlineFastfood />
                </div>
                <span className={styles.span}>Food</span>
            </div>

            <div className={styles.preference}>
                <div className={styles.icon}>
                    <TbMovie />
                </div>
                <span className={styles.span}>Movies</span>
            </div>

            <div className={styles.preference}>
                <div className={styles.icon}>
                    <MdOutlineSportsSoccer />
                </div>
                <span className={styles.span}>Sport</span>
            </div>

            <div className={styles.preference}>
                <div className={styles.icon}>
                    <BiSolidDrink />
                </div>
                <span className={styles.span}>Nightlife</span>
            </div>
        </section>
    )
}
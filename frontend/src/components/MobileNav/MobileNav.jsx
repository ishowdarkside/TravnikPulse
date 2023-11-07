// React icons
import { TbMailOpened } from 'react-icons/tb'
import { LuMap } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GrSettingsOption } from 'react-icons/gr';
// CSS
import styles from './MobileNav.module.scss';

export default function MobileNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={`${styles.link} ${styles.active}`}><TbMailOpened /></li>
                <li className={styles.link}><LuMap /></li>
                <li className={styles.link}><HiOutlineShoppingBag /></li>
                <li className={styles.link}><GrSettingsOption /></li>
            </ul>
        </nav>
    )
}
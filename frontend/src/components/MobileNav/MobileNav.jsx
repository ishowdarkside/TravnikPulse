import { Link, useLocation } from 'react-router-dom';
// React icons
import { TbMailOpened } from 'react-icons/tb'
import { LuMap } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoMdOptions } from 'react-icons/io';
// CSS
import styles from './MobileNav.module.scss';

export default function MobileNav() {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to='/app' className={pathname === '/app' ? `${styles.link} ${styles.active}` : styles.link}><TbMailOpened /></Link></li>
                <li><Link to='/app/map' className={pathname === '/app/map' ? `${styles.link} ${styles.active}` : styles.link}><LuMap /></Link></li>
                <li><Link to='/app/shop' className={pathname === '/app/shop' ? `${styles.link} ${styles.active}` : styles.link}><HiOutlineShoppingBag /></Link></li>
                <li><Link to='/app/settings' className={pathname === '/app/settings' ? `${styles.link} ${styles.active}` : styles.link}><IoMdOptions /></Link></li>
            </ul>
        </nav>
    )
}
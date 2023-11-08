import MobileNav from '../../components/MobileNav/MobileNav';
import Navbar from '../../components/Navbar/Navbar';
import langImage from '../../assets/bosnian-flag.png';
import checkImage from '../../assets/check-heart.png';
import notificationIcon from '../../assets/notification-icon.png';
import reportIcon from '../../assets/report-icon.png';
// React icons
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdOutlineBed } from 'react-icons/md';
import styles from './Settings.module.scss';

export default function Settings() {
    return (
        <div className={styles.settingsWrapper}>
            <Navbar />
            
            <div className={styles.settings}>
                {/* GENERAL SETTINGS */}
                <div className={styles.general}>
                    <h3>General Settings</h3>
                    <div className={styles.options}>
                        <div className={styles.item}>
                            <img src={langImage} alt="" />
                            <span>Change language</span>
                        </div>
                        <div className={styles.item}>
                            <img src={checkImage} alt="" />
                            <p>Change preference</p>
                        </div>
                        <div className={styles.item}>
                            <RiArrowGoBackLine />
                            <span>Reset preference</span>
                        </div>
                        <div className={styles.item}>
                            <MdOutlineBed />
                            <span>Disable suggestions</span>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION SETTINGS */}    
                <div className={styles.notifications}>
                    <h3>Notifications</h3>
                    <div className={styles.item}>
                        <img src={notificationIcon} alt="" />
                        <span>Pop-up notifications</span>
                    </div>
                </div>
                {/* OTHER SETTINGS */}
                <div className={styles.other}>
                    <h3>Other</h3>
                    <div className={styles.item}>
                        <img src={reportIcon} alt="" />
                        <span>Report event</span>
                    </div>
                    <div className={styles.item}>
                        <img src={checkImage} alt="" />
                        <span>Contact Support</span>
                    </div>
                </div>
            </div>

            <MobileNav />
        </div>
    )
}
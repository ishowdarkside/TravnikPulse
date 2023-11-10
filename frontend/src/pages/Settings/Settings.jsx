import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTouristDataContext } from '../../context/TouristDataContext';
import MobileNav from '../../components/MobileNav/MobileNav';
import Navbar from '../../components/Navbar/Navbar';
import BosnianFlag from "../../assets/bosnian-flag.png";
import USAFlag from "../../assets/usa-flag.png";
import GermanFlag from "../../assets/german-flag.png";
import SpanishFlag from "../../assets/spanish-flag.png";
import checkImage from '../../assets/check-heart.png';
import notificationIcon from '../../assets/notification-icon.png';
import reportIcon from '../../assets/report-icon.png';
import ChangeLanguageDropdown from './ChangeLanguageDropdown/ChangeLanguageDropdown';
// React icons
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdOutlineBed } from 'react-icons/md';
import styles from './Settings.module.scss';

export default function Settings() {
    const [ langDropdown, setLangDropdown ] = useState();
    const { language, setSuggestPlace, suggestPlace } = useTouristDataContext();
    const navigate = useNavigate();

    console.log(suggestPlace, language)

    // Reset all settings
    function resetSettings() {
        // Clear settings from storage
        localStorage.removeItem('selectedVisitPeriod');
        localStorage.removeItem('language');
        localStorage.removeItem('preferences');
        localStorage.removeItem('suggestPlace');
        localStorage.removeItem('visitCount');
        localStorage.removeItem('position');
        // Navigate to dashboard
        navigate('/app')
    }

    return (
        <div className={styles.settingsWrapper}>
            <Navbar />
            <div className={styles.settings}>
                {/* GENERAL SETTINGS */}
                <div className={styles.general}>
                    <h3>General Settings</h3>
                    <div className={styles.options}>
                        <div className={langDropdown ? `${styles.item} ${styles.active}` : styles.item} onClick={() => setLangDropdown(prevState => !prevState)}>
                            {language === 'bs' && <img src={BosnianFlag} alt="" />}
                            {language === 'en' && <img src={USAFlag} alt="" />}
                            {language === 'de' && <img src={GermanFlag} alt="" />}
                            {language === 'es' && <img src={SpanishFlag} alt="" />}
                            <span>Change language</span>
                        </div>
                        {langDropdown && <ChangeLanguageDropdown setLangDropdown={setLangDropdown} />}

                        <div className={styles.item}>
                            <img src={checkImage} alt="" />
                            <p>Change preference</p>
                        </div>
                        <div className={styles.item} onClick={resetSettings}>
                            <RiArrowGoBackLine />
                            <span>Reset settings</span>
                        </div>
                        <div className={styles.item} onClick={() => setSuggestPlace(prevState => !prevState)}>
                            <MdOutlineBed />
                            <span>{suggestPlace ? 'Disable suggestions' : 'Activate suggestions'}</span>
                        </div>
                    </div>
                </div>
                {/* NOTIFICATION SETTINGS */}    
                <div className={styles.notifications}>
                    <h3>Notifications</h3>
                    <div className={`${styles.item} ${styles.disabled}`}>
                        <img src={notificationIcon} alt="" />
                        <span>Pop-up notifications</span>
                    </div>
                </div>
                {/* OTHER SETTINGS */}
                <div className={styles.other}>
                    <h3>Other</h3>
                    <div className={`${styles.item} ${styles.disabled}`}>
                        <img src={reportIcon} alt="" />
                        <span>Report event</span>
                    </div>
                    <div className={`${styles.item} ${styles.disabled}`}>
                        <img src={checkImage} alt="" />
                        <span>Contact Support</span>
                    </div>
                </div>
            </div>

            <MobileNav />
        </div>
    )
}
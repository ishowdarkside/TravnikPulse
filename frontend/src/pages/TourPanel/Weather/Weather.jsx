import weatherSymbol from '../../../assets/weather-symbol.png'
import { IoIosPaperPlane } from 'react-icons/io'
// SCSS
import styles from './Weather.module.scss';

export default function Weather() {
    return (
        <section className={styles.weatherSection}>
            <div className={styles.weatherOverlay}></div>
            <div className={styles.left}>
                <p>Sonoma <IoIosPaperPlane /></p>
                <p className={styles.temperature}>76 &deg;</p>
            </div>
            <div className={styles.right}>
                <img src={weatherSymbol} alt="" className={styles.weatherSymbol} />
                <p>Sunny</p>
                <p>H:88 L:57</p>
            </div>
        </section>
    )
}
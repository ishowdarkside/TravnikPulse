import { useGetWeather } from '../../../hooks/useWeather';
import weatherSymbol from '../../../assets/weather-symbol.png'
import { IoIosPaperPlane } from 'react-icons/io'
// SCSS
import styles from './Weather.module.scss';

export default function Weather() {
    const { data, isLoading } =useGetWeather();

    if(isLoading) return <h1>Loading...</h1>

    return (
        <section className={styles.weatherSection}>
            <div className={styles.weatherOverlay}></div>
            <div className={styles.left}>
                <p>{data.name} <IoIosPaperPlane /></p>
                <p className={styles.temperature}>{Math.floor(data.main.temp - 273.15)} &deg;</p>
            </div>
            <div className={styles.right}>
                <img src={weatherSymbol} alt="" className={styles.weatherSymbol} />
                <p>{data.weather[0].main}</p>
                <p>H:{Math.floor(data.main.temp_max - 273.15)} L:{Math.floor(data.main.temp_min - 273.15)}</p>
            </div>
        </section>
    )
}
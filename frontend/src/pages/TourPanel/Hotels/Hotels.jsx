import allHotels from '../../../utils/hotels/hotel.json';
// Components
import Hotel from './Hotel/Hotel';
// React icons
import { AiOutlineArrowRight } from 'react-icons/ai';
// SCSS
import styles from './Hotels.module.scss';

export default function Hotels() {
    return (
        <section className={styles.hotels}>
            <h2 className={styles.mainTitle}>We found a place for you to sleep <AiOutlineArrowRight /></h2>
            <div className={styles.hotelWrapper}>
                {allHotels.hotels.map((hotel, index) => (
                    <Hotel hotel={hotel} key={index} />
                ))}
            </div>
        </section>
    )
}
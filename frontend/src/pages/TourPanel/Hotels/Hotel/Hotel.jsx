// React icons
import { BsFillStarFill } from 'react-icons/bs';
// SCSS
import styles from './Hotel.module.scss';

export default function Hotel() {
	return (
		<div className={styles.hotel}>
			<div className={styles.hotelOverlay} />
			<div className={styles.content}>
                <h2>Kod Lipe</h2>
                <p>70m from you</p>
                <div className={styles.reviewStars}>
                    <div className={`${styles.star} ${styles.active}`}>
                        <BsFillStarFill />
                    </div>
                    <div className={`${styles.star} ${styles.active}`}>
                        <BsFillStarFill />
                    </div>
                    <div className={`${styles.star} ${styles.active}`}>
                        <BsFillStarFill />
                    </div>
                    <div className={`${styles.star} ${styles.active}`}>
                        <BsFillStarFill />
                    </div>
                    <div className={styles.star}>
                        <BsFillStarFill />
                    </div>
                </div>
            </div>
		</div>
	);
}

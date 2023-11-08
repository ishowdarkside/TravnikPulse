import { TbMessage2Minus } from 'react-icons/tb';
// SCSS
import styles from './AboutTour.module.scss';

export default function AboutTour({ data, setShowReview }) {
	return (
		<>
			<div className={styles.details}>
                <p>{data.description}</p>
            </div>

            <button onClick={() => setShowReview(prevState => !prevState)}>
                <TbMessage2Minus />Leave a review
            </button>
		</>
	);
}

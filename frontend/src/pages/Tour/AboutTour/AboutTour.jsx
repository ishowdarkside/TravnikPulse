import { TbMessage2Minus } from 'react-icons/tb';
// SCSS
import styles from './AboutTour.module.scss';
import { useNavigate } from 'react-router-dom';

export default function AboutTour({ data, setShowReview, user }) {
    const navigate = useNavigate();
	return (
		<>
			<div className={styles.details}>
                <p>{data.description}</p>
            </div>

            <button onClick={() => {
                // If user is not logged
                if(user === 'Unauthorized') return navigate('/app/login')
                // When user is logged in
                setShowReview(prevState => !prevState)
            }}>
                <TbMessage2Minus />Leave a review
            </button>
		</>
	);
}
